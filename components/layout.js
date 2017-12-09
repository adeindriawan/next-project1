import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'This is the default title' }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <link rel="apple-touch-icon" sizes="57x57" href="https://cdn.zeit.co/favicon/apple-touch-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="https://cdn.zeit.co/favicon/apple-touch-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="https://cdn.zeit.co/favicon/apple-touch-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="https://cdn.zeit.co/favicon/apple-touch-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="https://cdn.zeit.co/favicon/apple-touch-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="https://cdn.zeit.co/favicon/apple-touch-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="https://cdn.zeit.co/favicon/apple-touch-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="https://cdn.zeit.co/favicon/apple-touch-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.zeit.co/favicon/apple-touch-icon-180x180.png" />
            <link rel="icon" type="image/png" href="https://cdn.zeit.co/favicon/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="https://cdn.zeit.co/favicon/android-chrome-192x192.png" sizes="192x192" />
            <link rel="icon" type="image/png" href="https://cdn.zeit.co/favicon/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/png" href="https://cdn.zeit.co/favicon/favicon-16x16.png" sizes="16x16" />
            <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&subset=latin,cyrillic-ext" rel="stylesheet" type="text/css" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type="text/css" />
            <link href="/static/plugins/bootstrap/css/bootstrap.css" rel="stylesheet" />
            <link href="/static/plugins/node-waves/waves.css" rel="stylesheet" />
            <link href="/static/plugins/animate-css/animate.css" rel="stylesheet" />
            <link href="/static/plugins/morrisjs/morris.css" rel="stylesheet" />
            <link href="/static/css/style.css" rel="stylesheet" />
            <link href="/static/css/themes/all-themes.css" rel="stylesheet" />
            <link href="/static/plugins/waitme/waitMe.css" rel="stylesheet" />
            <script src="/static/plugins/jquery/jquery.min.js" />
            <script src="/static/plugins/bootstrap/js/bootstrap.js" />
            <script src="/static/js/pages/ui/wow.js" />
            <script src="/static/plugins/bootstrap-select/js/bootstrap-select.js" />
            <script src="/static/plugins/jquery-slimscroll/jquery.slimscroll.js" />
            <script src="/static/plugins/node-waves/waves.js" />
            <script src="/static/plugins/jquery-countto/jquery.countTo.js" />
            <script src="/static/plugins/raphael/raphael.min.js" />
            <script src="/static/plugins/morrisjs/morris.js" />
            <script src="/static/plugins/chartjs/Chart.bundle.js" />
            <script src="/static/plugins/flot-charts/jquery.flot.js" />
            <script src="/static/plugins/flot-charts/jquery.flot.resize.js" />
            <script src="/static/plugins/flot-charts/jquery.flot.pie.js" />
            <script src="/static/plugins/flot-charts/jquery.flot.categories.js" />
            <script src="/static/plugins/flot-charts/jquery.flot.time.js" />
            <script src="/static/plugins/jquery-sparkline/jquery.sparkline.js" />
            <script src="/static/js/pages/index.js" />
            <script src="/static/js/demo.js" />
            <script src="/static/plugins/waitme/waitMe.js"/>
            <script dangerouslySetInnerHTML={{ __html: 'new WOW().init();' }} />
        </Head>

        {children}

        <footer>
            {'I`m here to stay'}
        </footer>
    </div>
)