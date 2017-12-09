import Head from 'next/head'

let scr = '$(document).on("ready", function() {$(".regular").slick({dots: true, infinite: true, slidesToShow: 3, slidesToScroll: 3 });});'

export default () => (
    <div>
        <Head>
            <meta charset="UTF-8"/>
            <link rel="stylesheet" type="text/css" href="/static/plugins/slick/slick.css"/>
            <link rel="stylesheet" type="text/css" href="/static/plugins/slick/slick-theme.css"/>
            <script src="/static/plugins/jquery/jquery.min.js" />
            <script src="/static/plugins/slick/slick.js" type="text/javascript" charset="utf-8" />
            <script dangerouslySetInnerHTML={{ __html: scr }} />
        </Head>
        <section className="regular slider">
            <div>
                <img src="http://placehold.it/350x300?text=1"/>
            </div>
            <div>
                <img src="http://placehold.it/350x300?text=2"/>
            </div>
            <div>
                <img src="http://placehold.it/350x300?text=3"/>
            </div>
            <div>
                <img src="http://placehold.it/350x300?text=4"/>
            </div>
            <div>
                <img src="http://placehold.it/350x300?text=5"/>
            </div>
            <div>
                <img src="http://placehold.it/350x300?text=6"/>
            </div>
        </section>
    </div>
)