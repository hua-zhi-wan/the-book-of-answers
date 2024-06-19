# 答案之书 the-book-of-answers

答案之书 Serverless 接口

[在Github打开](https://github.com/hua-zhi-wan/the-book-of-answers)


## 使用方法

```
GET /api/ask
```

### 请求

| 字段     | 类型   | 说明       | 必填 |
| -------- | ------ | ---------- | ---- |
| question | string | 想问的问题 | 可空 |

```
/api/ask?question=%E6%88%91%E5%8F%AF%E4%BB%A5%E5%92%8C%E5%A5%B9%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%90%97%EF%BC%9F
```

### 响应

| 字段     | 类型   | 说明       | 可空 |
| -------- | ------ | ---------- | ---- |
| question | string | 问过的问题 | `''` |
| index    | number | 答案序号   | 非空 |
| answer   | string | 答案       | 非空 |

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "question": "我可以和她在一起吗？",
    "index": 138,
    "answer": "一个人的细水长流"
}
```



