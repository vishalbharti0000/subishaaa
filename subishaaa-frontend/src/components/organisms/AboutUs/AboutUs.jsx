import React from "react";
import Card from "../../atoms/Card/Card";
import CardActionArea from "../../atoms/CardActionArea/CardActionArea";
import CardContent from "../../atoms/CardContent/CardContent";
import Grid from "../../atoms/Grid/Grid";
import Typography from "../../atoms/Typography/Typography";

function AboutUs() {
    return (
        <div>
            <Typography style={{ fontSize: "20px", marginRight: "5px", marginLeft: "5px" }} component="div">
                About Subishaaa
            </Typography>
            <Card style={{ marginRight: "5px", marginLeft: "5px" }}>
                <CardActionArea>
                    <CardContent>
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography style={{ fontSize: "12px", align: "justify" }} component="div" >
                                    Welcome to Subishaaa, the premier destination for high-quality silver jewelry. Our brand, Subishaaa - The Fine Silver, is dedicated to offering a wide range of beautiful and stylish silver jewelry that is perfect for any occasion.
                                    Our collection includes a variety of designs, from classic and elegant pieces to trendy and contemporary styles. We use only the finest silver in our jewelry, ensuring that each piece is of the highest quality and will last for years to come.
                                    At Subishaaa, we believe that everyone should be able to afford beautiful jewelry and that is why we offer our pieces at an affordable price point. We also know the importance of customer satisfaction, so we strive to provide excellent customer service and ensure that every customer is completely satisfied with their purchase.
                                    Our team of experienced designers and craftspeople work tirelessly to create new and unique designs, so you can always find something new and exciting when you shop with us.
                                    Whether you're looking for a gift for a loved one or a special treat for yourself, Subishaaa has something for everyone. With our wide range of designs and affordable prices, you're sure to find the perfect piece of silver jewelry for any occasion.
                                    Thank you for considering Subishaaa for all your silver jewelry needs. We look forward to serving you.
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Typography style={{ fontSize: "20px", marginRight: "5px", marginLeft: "5px" }} component="div">
                Our Mission
            </Typography>
            <Card style={{ marginRight: "5px", marginLeft: "5px" }}>
                <CardActionArea>
                    <CardContent>
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography style={{ fontSize: "12px", align: "justify" }} component="div" >
                                    At Subishaaa, our mission is to provide our customers with high-quality, pure silver jewelry and watches that are both beautiful and affordable.
                                    We strive to be the premier destination for those looking for a wide range of designs in silver jewelry and watches. We are dedicated to using only the finest silver in our products, and all our jewelry is hallmarked, which ensures that the quality of our products meets the industry standards.
                                    Our goal is to make our customers happy by providing excellent customer service and ensuring their complete satisfaction with their purchase. Our website is designed to be user-friendly and easy to navigate, so our customers can find exactly what they are looking for.
                                    We also work continuously to offer new and unique designs that keep up with the latest trends, so our customers can always find something new and exciting when they shop with us.
                                    In summary, our mission at Subishaaa - The Fine Silver is to provide our customers with high-quality, hallmarked pure silver jewelry and watches at an affordable price, with an exceptional customer service, that are beautiful and meet their needs.
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Typography style={{ fontSize: "20px", marginRight: "5px", marginLeft: "5px" }} component="div">
                Our Vision
            </Typography>
            <Card style={{ marginRight: "5px", marginLeft: "5px", marginBottom: "10px" }}>
                <CardActionArea>
                    <CardContent>
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography style={{ fontSize: "12px", align: "justify" }} component="div" >
                                    Our vision at Subishaaa - The Fine Silver is to be the leading provider of high-quality pure silver jewelry and watches, and to be recognized as the go-to brand for customers looking for beautiful and affordable silver jewelry.
                                    We see a future where customers turn to Subishaaa as their first choice for silver jewelry, knowing that they can always find the latest designs, crafted to perfection and hallmarked for quality. We want to be known for offering exceptional customer service, making it easy for customers to find what they are looking for and ensuring their complete satisfaction with their purchase.
                                    We also envision a future where we inspire customers to express their personal style and creativity through our jewelry, and where our customers become ambassadors of our brand, spreading the word about the quality, beauty and affordability of our silver jewelry.
                                    We look forward to a future where Subishaaa - The Fine Silver, is synonymous with quality, affordability, and style.
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default AboutUs;
