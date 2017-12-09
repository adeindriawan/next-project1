import Head from 'next/head'

export default class Subcategories extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Head>
                    <script src="/static/js/admin.js" />
                </Head>
                <div id="card-container" style={{ display: "none" }}>
                    <div className="row rowCategoryCards" id="cloned0">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 categoryCard wow fadeInUp">
                            <div className="card">
                                <div className="header bg-light-blue">
                                    <h2 id="">
                                        Light Blue - Title <small>Description text here...</small>
                                    </h2>
                                    <ul className="header-dropdown m-r--5">
                                        <li>
                                            <a href="javascript:void(0);" data-toggle="cardloading" data-loading-effect="timer" data-loading-color="lightBlue">
                                                <i className="material-icons">loop</i>
                                            </a>
                                        </li>
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
                                    Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra.
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}