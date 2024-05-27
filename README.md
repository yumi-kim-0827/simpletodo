# 💡Simple todo pwa

오늘 할 일, 하고싶은 일을 추가, 수정, 삭제할 수있는 간단한 투두리스트 웹앱입니다.

# 🖥️View web site

https://yumi-kim-0827.github.io/simpletodo/


<!--프로젝트 대문 이미지-->
![screen1](https://github.com/yumi-kim-0827/simpletodo/assets/116349476/b741156e-cf27-492e-af50-4a98a950ee3b)


<!--목차-->
# Table of Contents
- [[1] About the Project](#1-about-the-project)
  - [Features](#features)
  - [Technologies](#technologies)
- [[2] Getting Started](#2-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [[3] Usage](#3-usage)
- [[4] Contribution](#4-contribution)
- [[5] Acknowledgement](#5-acknowledgement)
- [[6] Contact](#6-contact)
- [[7] License](#7-license)



# [1] About the Project
오늘 할 일, 하고싶은 일을 추가, 수정, 삭제할 수있는 투두리스트 웹앱입니다.
다크모드의 모던한 투두리스트 웹앱으로 모바일 등 다양한 디바이스 반응형으로 제작되었습니다.


## Features

- pwa 환경 설정으로 모바일에서 웹앱 다운로드 설치 가능
  

## Technologies
- React js
- scss
- javascript


## Prerequisites
- npm
```bash
npm install npm@latest -g
```

## Installation
1. Repository 클론
```bash
git clone https://github.com/your-username/project-repository
```
2. NPM packages 설치
```bash
npm install
```


# [3] Usage

useReducer을 활용한 리스트 추가, 삭제, 수정 기능

```java
//리듀서 등록
const reducer = (todoList, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...todoList];
    case "UPDATE":
      return todoList.map((item) =>
        item.id == action.data.id ? action.data : item
      );
    case "DELETE":
      return todoList.filter((item) => item.id !== action.data.id);
  }
};
.
.
//add
  const onCreateHandler = () => {
    if (input.length > 0) {
      dispatch({
        type: "CREATE",
        data: {
          id: idRef.current++,
          content: input,
        },
      });
    } else {
      alert("입력폼에 적어주세요.");
    }
    setInput("");
  };
  //update
  const onUpdateHandler = (id) => {
    if (updateInput.length > 0) {
      dispatch({
        type: "UPDATE",
        data: {
          id,
          content: updateInput,
        },
      });
    }
    setInput("");
  };
  //delete
  const onDeleteHandler = (id) => {
    dispatch({
      type: "DELETE",
      data: {
        id,
      },
    });
    setInput("");
  };
```



# [4] Contribution
버그 수정에 🐞, 아이디어 제공에 💡, 새로운 기능 구현에 ✨를 사용할 수 있습니다.*
- 🐞 [dev-ujin](https://github.com/dev-ujin): 메인페이지 버그 수정



# [5] Acknowledgement

- design https://www.behance.net/gallery/197368319/Salesforce-CRM-AI-Scheduler-UX-UI-Design?tracking_source=search_projects&l=5



# [6] Contact
- 📧 yumee0827@naver.com
- 📋 [https://github.com/yumi-kim-0827](https://github.com/yumi-kim-0827)



# [7] License
MIT 라이센스



<!--Url for Badges-->
[license-shield]: https://img.shields.io/github/license/dev-ujin/readme-template?labelColor=D8D8D8&color=04B4AE
[repository-size-shield]: https://img.shields.io/github/repo-size/dev-ujin/readme-template?labelColor=D8D8D8&color=BE81F7
[issue-closed-shield]: https://img.shields.io/github/issues-closed/dev-ujin/readme-template?labelColor=D8D8D8&color=FE9A2E

<!--Url for Buttons-->
[readme-eng-shield]: https://img.shields.io/badge/-readme%20in%20english-2E2E2E?style=for-the-badge
[view-demo-shield]: https://img.shields.io/badge/-%F0%9F%98%8E%20view%20demo-F3F781?style=for-the-badge
[view-demo-url]: https://dev-ujin.github.io
[report-bug-shield]: https://img.shields.io/badge/-%F0%9F%90%9E%20report%20bug-F5A9A9?style=for-the-badge
[report-bug-url]: https://github.com/dev-ujin/readme-template/issues
[request-feature-shield]: https://img.shields.io/badge/-%E2%9C%A8%20request%20feature-A9D0F5?style=for-the-badge
[request-feature-url]: https://github.com/dev-ujin/readme-template/issues

<!--URLS-->
[license-url]: LICENSE.md
[contribution-url]: CONTRIBUTION.md
[readme-eng-url]: ../README.md



