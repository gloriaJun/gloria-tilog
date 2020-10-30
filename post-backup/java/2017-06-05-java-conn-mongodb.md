---
layout: post
title: "(Java) mongodb 연동하기"
date: 2017-06-05 14:45:00
author: gloria
categories: language
tags: java jdbc mongodb
---

MongoDB에 jdbc driver 를 이용하여 연동하는 방법에 대한 예제

#### gradle
```gradle
group 'java-data'
version '1.0-SNAPSHOT'

apply plugin: 'java'
apply plugin: 'idea'
apply plugin: 'eclipse'

sourceCompatibility = 1.8

repositories {
    jcenter()
//    mavenCenter()
}

dependencies {
    compile group: 'org.mongodb', name: 'mongo-java-driver', version: '3.4.2'

    // log
    compile "ch.qos.logback:logback-classic:1.2.3"
    compile "ch.qos.logback:logback-core:1.2.3"
//    runtime "org.slf4j:jcl-over-slf4j:1.7.25"

    // test
    testCompile group: 'junit', name: 'junit', version: '4.12'
}

```

##### 예제 코드
```java
import com.mongodb.MongoClient;
import com.mongodb.MongoCommandException;
import com.mongodb.ServerAddress;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class MongoSample {

  final static Logger logger = LoggerFactory.getLogger(MongoSample.class);

  final String IP = "192.168.99.100";
  final Integer PORT = 27017;
  final String DBNAME = "mydb";


  public void getCollectionList(MongoCollection<Document> collection) {
    MongoCursor<Document> cursor = collection.find().iterator();

    logger.debug("======================================");
    logger.debug("*** Get Collection List to JSON ***");
    logger.debug("======================================");
    while(cursor.hasNext()) {
      Document document = cursor.next();
      String json = document.toJson();
      logger.debug(json);
    }
    logger.debug("======================================");

    cursor.close();
  }

  public MongoCollection<Document> createCollection(MongoDatabase db, String collectionName) {
    try {
      db.createCollection(collectionName);
    } catch (MongoCommandException ex) {
      logger.warn("a collection 'mydb.books' already exists'");
    }
    return db.getCollection(collectionName);
  }

  public void insert(MongoCollection<Document> collection, Integer no, String title, String author) {
    Document obj = new Document();
    obj.put("no", no);
    obj.put("title", title);
    obj.put("author", author);
    collection.insertOne(obj);
  }

  public void dropCollection(MongoCollection<Document> collection) {
    collection.drop();
  }

  public void excute() {
    MongoClient client = new MongoClient(new ServerAddress(IP, PORT));
    MongoDatabase db =client.getDatabase(DBNAME);
    logger.debug("Database Name : {}", db.getName());

    String collectionName = "books";

    // create collection(table)
    MongoCollection<Document> collection = createCollection(db, collectionName);

    // 데이터 입력
    insert(collection, 1, "Tom & Jerry", "ABCort");

    // 데이타 가져오기
    getCollectionList(collection);

    // collection 삭제
    dropCollection(collection);

    // 접속 종료
    client.close();
  }

  public static void main(String[] args) {
    MongoSample sample = new MongoSample();
    sample.excute();
  }
}
```
