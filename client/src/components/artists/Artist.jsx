import React, { useEffect, useState } from 'react'
import { useSupabase } from '../../providers/supabaseProvider'

export const Artist = () => {
    const [artists, setArtists] = useState([])
    const { supabase } = useSupabase()

    const getData = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from("artists")
                .select("id,name,images(id,filename)")
            if (error) {
                console.error("Error getting data")
            } else {
                const sortedData = data.sort(function (a,b){
                    return 0.5 - Math.random()
                })
                setArtists(data)
            }
        }
    }

    useEffect(() => {
        getData()
    }, [supabase])

  return (
    <div>
        {artists &&
        artists.slice(0, 4).map((artists) => {
            console.log(artists);
            return (
                <div key={artists.id}>
                    <img src={artists.images.filename} alt="" />
                </div>
            )
            
        })
        }
    </div>
  )
}
