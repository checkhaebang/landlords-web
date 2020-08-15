import { CheckItem, Question } from 'entity/checklist';

const questions: Question[] = [
  {
    uid: 0,
    title: '연식이 5년 이하인가요?',
    type_: 'SingleChoice',
    label: '건물/방 상태',
    category: 'Normal',
    state: 'Looking',
    checks: [
      {
        uid: 1000,
        question_id: 0,
        contents: '',
      },
    ],
  },
  {
    uid: 1,
    title: '벽 모퉁이에 곰팡이가 없나요?',
    type_: 'SingleChoice',
    label: '건물/방 상태',
    category: 'Normal',
    state: 'Looking',
    checks: [
      {
        uid: 1001,
        question_id: 1,
        contents: '',
      },
    ],
  },
  {
    uid: 2,
    title: '도배를 새로 해주나요?',
    type_: 'SingleChoice',
    label: '옵션',
    category: 'Normal',
    state: 'Looking',
    checks: [
      {
        uid: 1002,
        question_id: 2,
        contents: '',
      },
    ],
  },
  {
    uid: 3,
    title: '관리비 포함 내역',
    type_: 'MultipleChoice',
    label: '방 정보',
    category: 'Normal',
    state: 'Looking',
    checks: [
      {
        uid: 1003,
        question_id: 3,
        contents: '가스',
      },
      {
        uid: 1004,
        question_id: 3,
        contents: '인터넷',
      },
      {
        uid: 1005,
        question_id: 3,
        contents: '청소비',
      },
      {
        uid: 1006,
        question_id: 3,
        contents: '수도',
      },
    ],
  },
];

const answersMap: { [id: string]: CheckItem[] } = {
  'Dabang::5f2a68c16644370946a0e10e': [
    {
      uid: 1001,
      question_id: 1,
      contents: '',
    },
    {
      uid: 1004,
      question_id: 3,
      contents: '인터넷',
    },
    {
      uid: 1005,
      question_id: 3,
      contents: '청소비',
    },
  ],
  'Dabang::5f348a71aeafad219a2314e9': [
    {
      uid: 1000,
      question_id: 0,
      contents: '',
    },
    {
      uid: 1004,
      question_id: 3,
      contents: '인터넷',
    },
    {
      uid: 1005,
      question_id: 3,
      contents: '청소비',
    },
    {
      uid: 1006,
      question_id: 3,
      contents: '수도',
    },
  ],
  'Zigbang::23037327': [],
};

export default { questions, answersMap };