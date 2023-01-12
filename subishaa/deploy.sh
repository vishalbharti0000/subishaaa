scp -i "C:/Users/visbhart/Downloads/subishaaa.pem" build/libs/subishaa-0.0.1-SNAPSHOT.jar ec2-44-211-129-46.compute-1.amazonaws.com:/home/ec2-user

scp -i "subishaaa-ec2.pem" subishaa-0.0.1-SNAPSHOT.jar ec2-user@ec2-3-110-173-38.ap-south-1.compute.amazonaws.com:/home/ec2-user
#for https we need to move subishaaa.pem(not same as ec2 pem file) and subishaa.p12 both

#installing java 11 on amazon linux
#sudo amazon-linux-extras install java-openjdk11

#for login to ec2
#ssh -i "subishaaa-ec2.pem" ec2-user@ec2-3-110-173-38.ap-south-1.compute.amazonaws.com

#kill process using port number in ec2
#kill -9 $(lsof -t -i:8080)

java -jar subishaa-0.0.1-SNAPSHOT.jar

nohup java -jar subishaa-0.0.1-SNAPSHOT.jar </dev/null &>/dev/null &

#for creating ssl certificate in local for springboot
#keytool -genkeypair -alias subishaa -keyalg RSA -keysize 2048 -storetype PKCS12 -keystore subishaa.p12 -validity 3650