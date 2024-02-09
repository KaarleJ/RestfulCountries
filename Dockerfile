FROM eclipse-temurin:21-jdk-alpine
EXPOSE 8080
ADD rc-server/target/rc-image.jar rc-image.jar
ENTRYPOINT ["java", "-jar", "rc-image.jar"]
