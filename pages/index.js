import Head from 'next/head'
import Layout from '../components/layout'
import Menu from '../components/menu'

let scr = '$(".regular").slick({dots: true, infinite: true, slidesToShow: 3, slidesToScroll: 3 });'

export default class Index extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        // <script dangerouslySetInnerHTML={{ __html: scr }} />
    }

    render() {
        return (
            <Layout>
                <Head>
                    <meta charset="UTF-8" />
                    <link rel="stylesheet" type="text/css" href="/static/plugins/slick/slick.css" />
                    <link rel="stylesheet" type="text/css" href="/static/plugins/slick/slick-theme.css" />
                    <script src="/static/plugins/jquery/jquery.min.js" />
                    <script src="/static/plugins/slick/slick.js" type="text/javascript" charset="utf-8" />
                    <script src="/static/js/admin.js" />
                </Head>
                <Menu />
                <section className="content">
                    <div className="container-fluid">
                        <div className="block-header">
                            <h2>DASBOR</h2>
                        </div>

                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="card">
                                    <div className="header">
                                        <h2>
                                            Anda berada di sini
                                </h2>
                                        <ul className="header-dropdown m-r--5">
                                            <li className="dropdown">
                                                <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                    <i className="material-icons">more_vert</i>
                                                </a>
                                                <ul className="dropdown-menu pull-right">
                                                    <li><a href="javascript:void(0);">Action</a></li>
                                                    <li><a href="javascript:void(0);">Another action</a></li>
                                                    <li><a href="javascript:void(0);">Something else here</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <ol className="breadcrumb breadcrumb-bg-teal">
                                            <li><a href="javascript:void(0);"><i className="material-icons">home</i> Home</a></li>
                                            <li><a href="javascript:void(0);"><i className="material-icons">library_books</i> Library</a></li>
                                            <li><a href="javascript:void(0);"><i className="material-icons">archive</i> Data</a></li>
                                            <li className="active"><i className="material-icons">attachment</i> File</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block-header">
                            <h2>
                                Kategori Rekomendasi
                                <small>Klik <em>refresh icon</em> di pojok kanan atas setiap kartu kategori untuk mendapatkan info terbaru di kategori tersebut.</small>
                            </h2>
                        </div>

                        <section className="regular slider">
                            
                        </section>

                    </div>
                </section>
            </Layout>
        )
    }
}