db.createCollection('users')

db.users.insert({ 
        "_id" : ObjectId("615c4eb12a13a43b78511cbc"),
        "confirmed" : false,
        "email" : "maximbezrukov98@gmail.com",
        "name" : "Maxim",
        "password" : "$2a$12$nE/b3kg0F/4aBU7H4Pm0yOTSheZ4p8MAK.fsM.nmZR7cnthr5VPFy",
        "avatar" : "",
        "updatedAt" : ISODate("2021-10-05T13:10:09.874Z"),
        "createdAt" : ISODate("2021-10-05T13:10:09.874Z"),
        "__v" : 0
})

db.createCollection('posts')

db.posts.insertMany([
    {
        "_id" : ObjectId("615c4ef62a13a43b78511cbd"),
        "title" : "Мой первый пост",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:11:18.951Z"),
        "createdAt" : ISODate("2021-10-05T13:11:18.951Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c513a47914142b8007791"),
        "title" : "Мой второй пост",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:20:58.965Z"),
        "createdAt" : ISODate("2021-10-05T13:20:58.965Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c514447914142b8007792"),
        "title" : "Мой третий пост",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:21:08.464Z"),
        "createdAt" : ISODate("2021-10-05T13:21:08.464Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c514847914142b8007793"),
        "title" : "4",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:21:12.530Z"),
        "createdAt" : ISODate("2021-10-05T13:21:12.530Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c514f47914142b8007794"),
        "title" : "5",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:21:19.076Z"),
        "createdAt" : ISODate("2021-10-05T13:21:19.076Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c515147914142b8007795"),
        "title" : "6",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:21:21.476Z"),
        "createdAt" : ISODate("2021-10-05T13:21:21.476Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c515447914142b8007796"),
        "title" : "7",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:21:24.107Z"),
        "createdAt" : ISODate("2021-10-05T13:21:24.107Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c515647914142b8007797"),
        "title" : "8",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:21:26.760Z"),
        "createdAt" : ISODate("2021-10-05T13:21:26.760Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c515947914142b8007798"),
        "title" : "9",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:21:29.095Z"),
        "createdAt" : ISODate("2021-10-05T13:21:29.095Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c515d47914142b8007799"),
        "title" : "10",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:21:33.455Z"),
        "createdAt" : ISODate("2021-10-05T13:21:33.455Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c515f47914142b800779a"),
        "title" : "11",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:21:35.790Z"),
        "createdAt" : ISODate("2021-10-05T13:21:35.790Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c516347914142b800779b"),
        "title" : "12",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:21:39.893Z"),
        "createdAt" : ISODate("2021-10-05T13:21:39.893Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c516747914142b800779c"),
        "title" : "13",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:21:43.043Z"),
        "createdAt" : ISODate("2021-10-05T13:21:43.043Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c516947914142b800779d"),
        "title" : "14",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:21:45.195Z"),
        "createdAt" : ISODate("2021-10-05T13:21:45.195Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c516e47914142b800779e"),
        "title" : "15",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:21:50.717Z"),
        "createdAt" : ISODate("2021-10-05T13:21:50.717Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c517147914142b800779f"),
        "title" : "16",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:21:53.101Z"),
        "createdAt" : ISODate("2021-10-05T13:21:53.101Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c517347914142b80077a0"),
        "title" : "17",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:21:55.609Z"),
        "createdAt" : ISODate("2021-10-05T13:21:55.609Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c517547914142b80077a1"),
        "title" : "18",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:21:57.975Z"),
        "createdAt" : ISODate("2021-10-05T13:21:57.975Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c517847914142b80077a2"),
        "title" : "19",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:22:00.131Z"),
        "createdAt" : ISODate("2021-10-05T13:22:00.131Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c517b47914142b80077a3"),
        "title" : "20",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:22:03.748Z"),
        "createdAt" : ISODate("2021-10-05T13:22:03.748Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c517e47914142b80077a4"),
        "title" : "21",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:22:06.202Z"),
        "createdAt" : ISODate("2021-10-05T13:22:06.202Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c518047914142b80077a5"),
        "title" : "22",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:22:08.688Z"),
        "createdAt" : ISODate("2021-10-05T13:22:08.688Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c518247914142b80077a6"),
        "title" : "23",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:22:10.750Z"),
        "createdAt" : ISODate("2021-10-05T13:22:10.750Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c518547914142b80077a7"),
        "title" : "24",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:22:13.243Z"),
        "createdAt" : ISODate("2021-10-05T13:22:13.243Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c518747914142b80077a8"),
        "title" : "25",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:22:15.731Z"),
        "createdAt" : ISODate("2021-10-05T13:22:15.731Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c518947914142b80077a9"),
        "title" : "26",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:22:17.832Z"),
        "createdAt" : ISODate("2021-10-05T13:22:17.832Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c518c47914142b80077aa"),
        "title" : "27",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:22:20.052Z"),
        "createdAt" : ISODate("2021-10-05T13:22:20.052Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c518e47914142b80077ab"),
        "title" : "28",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:22:22.301Z"),
        "createdAt" : ISODate("2021-10-05T13:22:22.301Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c519147914142b80077ac"),
        "title" : "29",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:22:25.532Z"),
        "createdAt" : ISODate("2021-10-05T13:22:25.532Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c519647914142b80077ad"),
        "title" : "30",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:22:30.868Z"),
        "createdAt" : ISODate("2021-10-05T13:22:30.868Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c519947914142b80077ae"),
        "title" : "31",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:22:33.190Z"),
        "createdAt" : ISODate("2021-10-05T13:22:33.190Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c519e47914142b80077af"),
        "title" : "32",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:22:38.692Z"),
        "createdAt" : ISODate("2021-10-05T13:22:38.692Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c51a047914142b80077b0"),
        "title" : "33",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:22:40.989Z"),
        "createdAt" : ISODate("2021-10-05T13:22:40.989Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c51e347914142b80077b1"),
        "title" : "34",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:23:47.354Z"),
        "createdAt" : ISODate("2021-10-05T13:23:47.354Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c51e547914142b80077b2"),
        "title" : "35",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:23:49.520Z"),
        "createdAt" : ISODate("2021-10-05T13:23:49.520Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c51e747914142b80077b3"),
        "title" : "36",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:23:51.816Z"),
        "createdAt" : ISODate("2021-10-05T13:23:51.816Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c51ea47914142b80077b4"),
        "title" : "37",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:23:54.376Z"),
        "createdAt" : ISODate("2021-10-05T13:23:54.376Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c51ec47914142b80077b5"),
        "title" : "38",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:23:56.611Z"),
        "createdAt" : ISODate("2021-10-05T13:23:56.611Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c51ee47914142b80077b6"),
        "title" : "39",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:23:58.700Z"),
        "createdAt" : ISODate("2021-10-05T13:23:58.700Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c51f247914142b80077b7"),
        "title" : "40",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:24:02.854Z"),
        "createdAt" : ISODate("2021-10-05T13:24:02.854Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c51f447914142b80077b8"),
        "title" : "41",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:24:04.961Z"),
        "createdAt" : ISODate("2021-10-05T13:24:04.961Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c51f747914142b80077b9"),
        "title" : "42",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:24:07.205Z"),
        "createdAt" : ISODate("2021-10-05T13:24:07.205Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c51f947914142b80077ba"),
        "title" : "43",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:24:09.261Z"),
        "createdAt" : ISODate("2021-10-05T13:24:09.261Z"),
        "__v" : 0
    },
    {
        "_id" : ObjectId("615c51fb47914142b80077bb"),
        "title" : "44",
        "message": {
            "text" : "Всем привет, меня зовут...",
            "files": []
        },
        "author" : ObjectId("615c4eb12a13a43b78511cbc"),
        "updatedAt" : ISODate("2021-10-05T13:24:11.637Z"),
        "createdAt" : ISODate("2021-10-05T13:24:11.637Z"),
        "__v" : 0
    }
])
