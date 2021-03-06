import Head from 'next/head'
import Image from 'next/image'
import { getAllEvents, getFeaturedEvents } from '../dummy-data'
import styles from '../styles/Home.module.css'
import EventList from '../components/events/event-list'

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  
  return (
    <div>
     <EventList items = {featuredEvents} />
    </div>
  )
}
