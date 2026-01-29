
import { Skill, WorkItem } from './types';

export const ACQUIRED_SKILLS: Skill[] = [
  { emoji: '🥊', name: '拳击' },
  { emoji: '🚣', name: '赛艇' },
  { emoji: '🎼', name: '古筝' },
  { emoji: '🎾', name: '网球' },
  { emoji: '⛷️', name: '滑雪' },
  { emoji: '🏹', name: '射箭' },
  { emoji: '🧘‍♀️', name: '普拉提' },
  { emoji: '🧘', name: '瑜伽' },
  { emoji: '🎨', name: '画唐卡' },
  { emoji: '🏄‍♀️', name: '冲浪' },
  { emoji: '🛶', name: '皮划艇' },
  { emoji: '🛹', name: '滑板' },
  { emoji: '🖌️', name: '书法' },
  { emoji: '🏇', name: '马术' },
  { emoji: '🏎️', name: '卡丁车' },
];

export const LOADING_SKILLS: Skill[] = [
  { emoji: '🌿', name: '中医', locked: true },
  { emoji: '🧗‍♀️', name: '攀岩', locked: true },
  { emoji: '⛵', name: '帆船', locked: true },
];

export const POSTER_WORKS: WorkItem[] = [
  {
    image: 'poster0.png',
    title: '云谷二期 · 空降行动',
    desc: '品牌事件',
    ratio: 'portrait'
  },
  {
    image: 'poster2.png',
    title: '福寿螺安全课',
    desc: '课程故事',
    ratio: 'portrait'
  },
  {
    image: 'poster8.jpg',
    title: '酷玩节创意短片',
    desc: '视频策划',
    ratio: 'portrait'
  },
];

export const VIDEO_WORKS: WorkItem[] = [
  {
    image: 'poster10.png',
    title: '得到 · 联名',
    desc: '品牌联名',
    ratio: 'landscape'
  },
  {
    image: 'poster3.jpg',
    title: '毕业生故事：诚实的厨师',
    desc: '视频策划',
    ratio: 'landscape'
  },
  {
    image: 'poster4.jpg',
    title: '我是袁博',
    desc: '视频策划',
    ratio: 'landscape'
  },
];

export const GALLERY_PORTRAIT: WorkItem[] = [
  {
    image: 'photo1.jpg',
    title: '信仰女孩',
    desc: '麦宿 · 2025',
    ratio: 'portrait'
  },
  {
    image: 'photo2.JPG',
    title: '香根时轮佛塔',
    desc: '甘孜 · 2025',
    ratio: 'portrait'
  },
  {
    image: 'photo7.JPG',
    title: '转经人',
    desc: '德格印经院',
    ratio: 'portrait'
  },
];

export const GALLERY_LANDSCAPE: WorkItem[] = [
  {
    image: 'photo3.JPG',
    title: '太子尖清晨',
    desc: '临安 · 2025',
    ratio: 'landscape'
  },
  {
    image: 'photo5.JPG',
    title: '冬日雪原',
    desc: '川西 · 2025',
    ratio: 'landscape'
  },
  {
    image: 'photo8.JPG',
    title: '佛伦斯堡',
    desc: '德国 · 2025',
    ratio: 'landscape'
  },
];
