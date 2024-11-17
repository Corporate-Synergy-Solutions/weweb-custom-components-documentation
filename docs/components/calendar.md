---
aside: false
---

# Calendar

Google calendar like component where you can manage your events.

<iframe height="720" width="1024" src="https://stackblitz.com/edit/vitejs-vite-tgg3ua?embed=1&hideExplorer=1&hideNavigation=1&theme=light&view=preview"></iframe>

## Properties

| name              | type               | default | description                 |
| ----------------- | ------------------ | ------- | --------------------------- |
| Event data        | `Array` of `Event` | `[]`    | Events data inside calendar |
| First week monday | `Boolean`          | `true`  | using monday as first week  |

### Object

| name  | type                                                                                                                                                                                | example                                                                                                                                                          |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Event | `id: Text / Number, start: 'yyyy-MM-dd', end: 'yyyy-MM-dd', title: Text, description: Text, calendarId: 'personal' / 'schoool' / 'leisure' / 'work' , participants : Array of Text` | `{id: 1, start: '2024-10-28', end: '2024-10-28', title: 'this is title', description: 'this is description', calendarId: 'work', participants: ['John', 'Doe']}` |

## Events

| name         | type    | description                   |
| ------------ | ------- | ----------------------------- |
| event:create | `Event` | Emmited when event is created |
| event:update | `Event` | Emmited when event is updated |
| event:delete | `Event` | Emmited when event is deleted |
