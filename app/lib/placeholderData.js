export const users = [
  {
    id: "48a2a660-0003-4dbf-9724-e8344a93476b",
    name: "John",
    email: "john27@gmail.com",
    password: "123456",
  },
];

export const themes = [
  {
    id: "4a12e96e-46da-4c46-890e-4569844ab048",
    name: "Школа",
    userId: users[0].id,
  },
  {
    id: "764c83e7-721f-46ea-a1c9-bdea37870ad6",
    name: "Еда",
    userId: users[0].id,
  },
  {
    id: "fc043748-cb5a-43c3-baec-b58b19891617",
    name: "Спорт",
    userId: users[0].id,
  },
  {
    id: "7d21e8c5-fc93-4b7e-9158-293f2f299a3f",
    name: "Путешествия",
    userId: users[0].id,
  },
  {
    id: "ea3b7a12-b9ec-4e5e-9bc2-c6d35b64ff7f",
    name: "Природа",
    userId: users[0].id,
  },
];

export const words = [
  {
    id: "35566083-b34c-4ecb-bd48-f89dfb5d3ae8",
    theme_id: themes[0].id,
    english: "Homework",
    russian: "Домашняя работа",
  },
  {
    id: "a6b9d7f1-1a91-49d2-9d65-b68cbb8f3c37",
    theme_id: themes[0].id,
    english: "Learn",
    russian: "Учить",
  },
  {
    id: "68c07f3b-14cf-4ed3-a2ad-32bb7cc1c1cf",
    theme_id: themes[0].id,
    english: "Subject",
    russian: "Предмет",
  },
  {
    id: "f5a7cc4e-90e7-4f02-8e59-8d6d4a39126d",
    theme_id: themes[0].id,
    english: "Study",
    russian: "Учиться",
  },
  {
    id: "cabce1bd-3ade-439f-8ebe-3341440e582e",
    theme_id: themes[0].id,
    english: "Mark",
    russian: "Оценка",
  },
  {
    id: "d51e07be-932e-4f4b-95e1-af5201be03d0",
    theme_id: themes[1].id,
    english: "Cake",
    russian: "Торт",
  },
  {
    id: "b24062d3-c430-45b8-a2ef-4bcfc4a60293",
    theme_id: themes[1].id,
    english: "Salt",
    russian: "Соль",
  },
  {
    id: "b4bfb12e-b0be-445d-94b5-0424d6eb9477",
    theme_id: themes[1].id,
    english: "Butter",
    russian: "Масло",
  },
  {
    id: "017c44c4-3f3e-4c50-a5b8-44ea51f79f08",
    theme_id: themes[1].id,
    english: "Soup",
    russian: "Суп",
  },
  {
    id: "48a7cc1f-1f4a-4562-b2fd-27e8b1e7ee43",
    theme_id: themes[1].id,
    english: "Meat",
    russian: "Мясо",
  },
  {
    id: "3ef38096-9dec-4800-a9d5-9f3514fa43f5",
    theme_id: themes[2].id,
    english: "Sportsman",
    russian: "Спортсмен",
  },
  {
    id: "203fc00c-d5ff-4ae8-84b8-df3c3481486d",
    theme_id: themes[2].id,
    english: "Gym",
    russian: "Спортивный зал",
  },
  {
    id: "f918d3bc-fb6f-46cf-908e-34b74adce9ab",
    theme_id: themes[2].id,
    english: "Match",
    russian: "Матч",
  },
  {
    id: "1f6bbad4-cb30-4678-b62c-5c71e6af2c80",
    theme_id: themes[2].id,
    english: "Competition",
    russian: "Соревнования",
  },
  {
    id: "0631bee7-98a5-4500-86fe-61973523896f",
    theme_id: themes[2].id,
    english: "Winner",
    russian: "Победитель",
  },
  {
    id: "776f0e32-9b93-42ed-94b0-18780d5ac6d2",
    theme_id: themes[3].id,
    english: "Leave",
    russian: "Уехать",
  },
  {
    id: "b9af4018-86da-462d-8224-26b3a3c0ac48",
    theme_id: themes[3].id,
    english: "Unusual",
    russian: "Необычный",
  },
  {
    id: "46e77be0-7a01-4388-9b5e-8bc3f3d2044e",
    theme_id: themes[3].id,
    english: "Exciting",
    russian: "Увлекательный",
  },
  {
    id: "8d9eab35-c95b-4f76-851a-1f3b64c8fc8d",
    theme_id: themes[3].id,
    english: "Trip",
    russian: "Поездка",
  },
  {
    id: "203d3c57-41a1-48f8-8f85-08c1e9b251f1",
    theme_id: themes[3].id,
    english: "Visit",
    russian: "Посетить",
  },
  {
    id: "67131268-999e-4ac2-961d-1b0da244f349",
    theme_id: themes[4].id,
    english: "Sun",
    russian: "Солнце",
  },
  {
    id: "4fc1f106-f2cf-40ca-9b97-3fd3981b5a11",
    theme_id: themes[4].id,
    english: "Sunset",
    russian: "Закат",
  },
  {
    id: "8e7e2b97-bb4a-41ba-b1f4-0c7351a743f1",
    theme_id: themes[4].id,
    english: "Sunrise",
    russian: "Рассвет",
  },
  {
    id: "4c99c9c6-3c3f-4a10-8c13-b1bc1f04ab4c",
    theme_id: themes[4].id,
    english: "Star",
    russian: "Звезда",
  },
  {
    id: "2d66fa01-8c58-412b-a4a6-2bb91ff1d0f1",
    theme_id: themes[4].id,
    english: "River",
    russian: "Река",
  },
];
