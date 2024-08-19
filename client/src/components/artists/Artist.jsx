import React, { useEffect, useState } from 'react'
import { useSupabase } from '../../providers/supabaseProvider'
import styles from './artist.module.scss'

export const Artist = () => {
    const [events, setEvents] = useState([])
    const { supabase } = useSupabase()

    const getData = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from("events")
                .select("id,title,description,datetime,stage_id,type_id,images(id,filename)")
            if (error) {
                console.error("Error getting data")
            } else {
                const sortedData = data.sort(function (a,b){
                    return 0.5 - Math.random()
                })
                setEvents(data)
            }
        }
    }

    useEffect(() => {
        getData()
    }, [supabase])

  return (
    <div className={styles.artistContainer}>
        {events &&
        events.slice(0, 9).map((events) => {
            console.log(events);
            return (
                <section key={events.id}>
                    <img src={events.images.filename} alt="" />
                    <div>
                        <h3>{events.title}</h3>
                        <h3>{events.datetime}</h3>
                    </div>
                </section>
            )
            
        })
        }
    </div>
  )
}
