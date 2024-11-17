---
aside: false
---

# Calendar

Google calendar like component where you can manage your events.

<Calendar :eventData="eventData"/>

## Properties

| name              | type               | default | description                 |
| ----------------- | ------------------ | ------- | --------------------------- |
| Event data        | `Array` of `Event` | `[]`    | Events data inside calendar |
| First week monday | `Boolean`          | `true`  | using monday as first week  |

### Object

| name  | type                                                                                                                                                                                | example                                                                                                                                                           |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Event | `id: Text / Number, start: 'yyyy-MM-dd', end: 'yyyy-MM-dd', title: Text, description: Text, calendarId: 'personal' / 'schoool' / 'leisure' / 'work' , participants : Array of Text` | `{id: 1, start: 2024-10-28, end: 2024-10-28, title: this is title, description: this is description, calendarId: work, participants: ['Andre', 'Tony', 'Iqbal']}` |

## Events

| name         | type    | description                   |
| ------------ | ------- | ----------------------------- |
| event:create | `Event` | Emmited when event is created |
| event:update | `Event` | Emmited when event is updated |
| event:delete | `Event` | Emmited when event is deleted |

<script setup>
import Calendar from '../vue-components/calendar/Calendar.vue'
const eventData = [
  {
    id: 1,
    start: '2024-10-28',
    end: '2024-10-28',
    title: 'this is title',
    description: 'this is description',
    calendarId: 'work',
    participants: ['Andre', 'Tony', 'Iqbal'],
  },
  {
    id: 2,
    start: '2024-10-29 08:00',
    end: '2024-10-29 10:00',
    title: 'hi again',
    description: 'this is description again',
    calendarId: 'school',
    participants: ['Andre', 'Tony', 'Iqbal'],
  },
  {
    id: 3,
    start: '2024-10-30 08:00',
    end: '2024-10-30 10:00',
    title: 'this is title 2',
    description: 'this is description 2',
    calendarId: 'leisure',
  },
  {
    id: 4,
    start: '2024-10-31 08:00',
    end: '2024-10-31 10:00',
    title: 'this is title again 2',
    description: 'this is description again 2',
    calendarId: 'personal',
  },
]
</script>
