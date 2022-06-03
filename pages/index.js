import Head from 'next/head'
import Image from 'next/image'
import { getAllEvents } from '../dummy-data'
import styles from '../styles/Home.module.css'
import EventList from '../components/events/event-list'

export default function HomePage() {
  const featuredEvents = getAllEvents();
  
  return (
    <div>
     <EventList items = {featuredEvents} />
    </div>
  )
}
