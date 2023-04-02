import Arcade from '../assets/images/icon-arcade.svg'
import Advanced from '../assets/images/icon-advanced.svg'
import Pro from '../assets/images/icon-pro.svg'

export type Step = {
  id: string
  sidebar: string
  title: string
  description: string
}

export const steps: Step[] = [
  {
    id: '1',
    sidebar: 'YOUR INFO',
    title: 'Personal info',
    description: 'Please provide your name, email address, and phone number.',
  },
  {
    id: '2',
    sidebar: 'SELECT-PLANS',
    title: 'Select your plan',
    description: 'You have the option of monthly or yearly billing.',
  },
  {
    id: '3',
    sidebar: 'ADD-ONS',
    title: 'Pick add-ons',
    description: 'Add-ons help enhance your gaming experience.',
  },
  {
    id: '4',
    sidebar: 'SUMMARY',
    title: 'Finishing up',
    description: 'Double-check everything looks OK before confirming.',
  },
  {
    id: '5',
    sidebar: '',
    title: '',
    description: '',
  },
]

export type CardType = {
  image: string
  title: 'Arcade' | 'Advanced' | 'Pro'
  monthPrice: number
}

export const cards: CardType[] = [
  {
    image: Arcade,
    title: 'Arcade',
    monthPrice: 9,
  },
  {
    image: Advanced,
    title: 'Advanced',
    monthPrice: 12,
  },
  {
    image: Pro,
    title: 'Pro',
    monthPrice: 15,
  },
]
