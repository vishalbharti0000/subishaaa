import { createContext, useEffect, useState } from 'react'
import { THEMES } from '../constants/enums.constants'

const initialSettings = {
    compact: false,
    direction: 'ltr',
    responsiveFontSizes: true,
    roundedCorners: false,
    theme: THEMES.LIGHT,
}

export const restoreSettings = () => {
    let settings = null

    try {
        const storedData = window.localStorage.getItem('settings')

        if (storedData) {
            settings = JSON.parse(storedData)
        } else {
            settings = {
                compact: false,
                direction: 'ltr',
                responsiveFontSizes: true,
                roundedCorners: false,
                theme: THEMES.LIGHT,
            }
        }
    } catch (err) {
        // If stored data is not a strigified JSON this will fail,
        // that's why we catch the error
    }

    return settings
}

export const storeSettings = (settings) => {
    window.sessionStorage.setItem('settings', JSON.stringify(settings))
}

export const SettingsContext = createContext({
    settings: initialSettings,
    saveSettings: () => { },
})

export const SettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState(initialSettings)

    useEffect(() => {
        const restoredSettings = restoreSettings()

        if (restoredSettings) {
            setSettings(restoredSettings)
        }
    }, [])

    const saveSettings = (updatedSettings) => {
        setSettings(updatedSettings)
        storeSettings(updatedSettings)
    }

    return (
        <SettingsContext.Provider
            value={{
                settings,
                saveSettings,
            }}
        >
            {children}
        </SettingsContext.Provider>
    )
}
