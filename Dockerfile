FROM eclipse-temurin:21-jdk-alpine
EXPOSE 8080
ADD rc-server/target/quarkus-app quarkus-run.jar
ENTRYPOINT ["java", "-jar", "quarkus-run.jar"]
