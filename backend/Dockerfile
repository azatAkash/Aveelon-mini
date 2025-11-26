FROM eclipse-temurin:17-jdk
WORKDIR /app

# Установка Maven
RUN apt-get update && apt-get install -y maven

COPY pom.xml .
COPY src ./src

# Сборка проекта
RUN mvn clean package -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "target/backend1-0.0.1-SNAPSHOT.jar"]
