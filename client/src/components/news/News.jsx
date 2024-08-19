import { useEffect, useState } from "react"
import { useSupabase } from "../../providers/supabaseProvider"
import styles from './news.module.scss'

export const News = () => {
    const [news, setNews] = useState([])
    const { supabase } = useSupabase()

    const getData = async () => {
        if (supabase) {
            const { data, error } = await supabase
                .from("news")
                .select("id,datetime,title,teaser,content,author,images(id,filename)")
            if (error) {
                console.error("Error getting data")
            } else {
                const sortedData = data.sort(function (a,b){
                    return 0.5 - Math.random()
                })
                setNews(data)
            }
        }
    }

    useEffect(() => {
        getData()
    }, [supabase])

    return (
        <div>
            {news &&
                news.slice(0, 3).map((item, index) => {
                    console.log(item);
                    return (
                        <div
                            className={`${styles.newsWrapper} ${index === 1 ? styles.reverseGrid : ""}`}
                            key={item.id}
                        >
                            <article>
                                <img src={item.images.filename} alt="" />
                                <div>
                                <h4>{item.title}</h4>
                                <p>{item.teaser}</p>
                                <button>Læs mere</button>
                                </div>
                            </article>
                            <section className={styles.tickets}>
                                <h3>FÅ BILLETTER TILBAGE</h3>
                                <h2>KØB <br /> HER</h2>
                            </section>
                        </div>
                    );
                })}
        </div>
    );
}
