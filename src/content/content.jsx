import { NavLink, Link } from "react-router-dom";

const content = {
    pt: {
        navbar: <div className="menu col-md-8 col-lg-6">
            <nav className="navbar navbar-light bg-transparent">
                <div className="container-fluid justify-content-evenly">
                    <NavLink className="navbar-brand fs-6" to="/">
                        <img src="images/homeIcon.png" alt="" width="30" className="d-inline-block align-text-center" />
                        <span className="d-none d-md-inline-block">início</span>
                    </NavLink>
                    <NavLink className="navbar-brand fs-6" to="/writing">
                        <img src="images/writingIcon.png" alt="" width="30" className="d-inline-block align-text-center" />
                        <span className="d-none d-md-inline-block">livros e textos</span>
                    </NavLink>
                    <NavLink className="navbar-brand fs-6" to="/dev">
                        <img src="images/devIcon.png" alt="" width="30" className="d-inline-block align-text-center" />
                        <span className="d-none d-md-inline-block">development</span>
                    </NavLink>
                    <NavLink className="navbar-brand fs-6" to="/contact">
                        <img src="images/contactIcon.png" alt="" width="30" className="d-inline-block align-text-center" />
                        <span className="d-none d-md-inline-block">fale comigo</span>
                    </NavLink>
                </div>
            </nav>
            <hr />
            <div className="newsletter-header">
                <Link to="/newsletter"><h5>newsletter <i>Eu posso estar errado</i></h5></Link>
            </div>
            <hr />
        </div>,
        home: {
            main: <div><h5>Quem sou eu?</h5>
                Meu nome é <b>Gabriel Schincariol Cavalcante</b>, e eu nasci em Boituva, no interior de São Paulo.
                Estudei na <b>Escola Preparatória de Cadetes-do-Ar</b>, em Barbacena, onde comecei a escrever com maior
                frequência, como contraponto ao estrito regime militar. Sou formado na Faculdade de Direito da
                Universidade de São Paulo, mas não sou advogado. Apesar da ocupação distinta no imposto de renda, sou
                <b>escritor</b>. Em 2014 fui premiado na 4ª edição da Olimpíada de Língua Portuguesa com o artigo de
                opinião <b>O passado que não passou</b>. Em 2019 venci, na categoria texto, o concurso <b>Nascente</b>,
                maior concurso cultural da USP, com a coletânea de contos <a
                    href="https://www.amazon.com.br/HIST%C3%93RIA-DOS-HOMENS-contos-come%C3%A7o-ebook/dp/B08BC2P2D2">A
                    história dos homens</a>. Participei com um <a
                        href="https://gschincariol.medium.com/75-rue-jo%C3%A3o-adolfo-app-114-centre-ville-57724e2e6292">texto
                    selecionado</a> do concurso <b>Travessias / Traversées</b>, organizado pela Embaixada da França no
                Brasil em conjunto com o coletivo 614. Em 2021 lancei o livro de contos <a
                    href="https://www.editorapatua.com.br/produto/243131/um-mundo-em-que-existem-baleias-de-gabriel-schincariol-cavalcante">Um
                    mundo em que existem baleias</a>, pela Editora Patuá. Atualmente, além de escrever ficção e
                não-ficção, estou estudando e me aprofundando em <a href="/dev">web development</a>, unindo minha
                capacidade de
                articulação escrita e criativa com ferramentas tecnológicas.</div>,
            lastTexts: <h5>Últimos textos publicados</h5>
        },
        error: <div><h2>404</h2>
            <h5>Não há nada por aqui. Para que você não perca a viagem, fique com uma imagem do Bud, que é um bom garoto:</h5></div>,
        writing: <div className="contentText d-flex justify-content-center flex-column flex-md-row mt-2">
            <div className="contentLeft col-md-5 me-md-2">
                <figure className="figure"><a
                    href="https://www.editorapatua.com.br/produto/243131/um-mundo-em-que-existem-baleias-de-gabriel-schincariol-cavalcante">
                    <img src="../images/baleiasThumb.jpg" className="figure-img img-fluid rounded" alt="..." /></a>
                    <figcaption className="figure-caption">Um mundo em que existem baleias (Editora Patuá, 2021). <p><i>Por
                        que as coisas têm o nome que as coisas têm? Essa dúvida que surge na cabeça da criança
                        pode se apagar com a passagem do tempo, mas a sua fundamental importância não
                        desaparece: é através da curiosidade que se descobre a verdade.
                        Os 12 contos de Um mundo em que existem baleias são retirados do universo infantil, mas
                        não são histórias infantis. São histórias sobre deslumbramento, sobre o amor, sobre o
                        ódio, sobre o corpo, sobre a morte, sobre a sexualidade. As histórias do universo
                        infantil estão recheadas de possibilidades e surpresas, guiadas pelos olhos de quem vê a
                        vida ainda pela primeira vez, feito folha em branco para ser rabiscada.
                        Se existem baleias, tudo é possível. Este é, afinal, um mundo em que existem
                        baleias.</i></p>
                    </figcaption>
                </figure>
            </div>
            <div className="contentRight col-md-5 ms-md-2 mt-2 mt-md-0">
                <p>Desde 2013 tenho ativa produção literária, com mais de 500 textos de ficção e não-ficção publicados
                    no <a href="https://gschincariol.medium.com">Medium</a>. Nesse período, participei de eventos e
                    concursos literários, com premiações e reconhecimentos como:</p>
                <ul>
                    <li><a
                        href="https://gazetaarcadas.com/2019/11/06/escrevendo-no-largo-sao-francisco/">Nascente
                        USP 2019 (Categoria Texto)</a></li>
                    <li><a href="https://www.fab.mil.br/noticias/imprime/21231/">Olimpíada de
                        Língua Portuguesa 2014 (Artigo de Opinião)</a></li>
                    <li><a
                        href="https://gschincariol.medium.com/75-rue-jo%C3%A3o-adolfo-app-114-centre-ville-57724e2e6292">Travessias
                        / Traversées (Conto)</a></li>
                    <li><a
                        href="https://www.prefeiturarp.usp.br/cultura/POETADEGAVETA/PDF/PG22.pdf">Poeta de Gaveta -
                        USP Ribeirão Preto</a></li>
                </ul>
                <p>Três das minhas histórias viraram eBooks, que podem ser comprados na <a
                    href="https://www.amazon.com.br/Gabriel-Schincariol-Cavalcante/e/B094JXP92M%3Fref=dbs_a_mng_rwt_scns_share">Amazon</a>:
                </p>
                <ul>
                    <li><a
                        href="https://www.amazon.com.br/gp/product/B08RSKW39G/ref=dbs_a_def_rwt_bibl_vppi_i0">esses
                        sapatos não me servem mais</a></li>
                    <li><a
                        href="https://www.amazon.com.br/gp/product/B08BC2P2D2/ref=dbs_a_def_rwt_bibl_vppi_i1">A
                        história dos homens (Nascente 2019)</a></li>
                    <li><a
                        href="https://www.amazon.com.br/gp/product/B08R5B7Z85/ref=dbs_a_def_rwt_bibl_vppi_i2">A
                        solidão de Samir Fausto na história de acontecimentos ordinários</a></li>
                </ul>
                <p>Em 2021 tive meu primeiro livro publicado, <a
                    href="https://www.editorapatua.com.br/produto/243131/um-mundo-em-que-existem-baleias-de-gabriel-schincariol-cavalcante">Um
                    mundo em que existem baleias</a>, pela Editora Patuá. É um livro de contos sobre o universo
                    infantil, mas não é um livro infantil. O conto <b>Caravelas</b> pode ser lido no site da Editora.
                </p>
                <p>Além da produção literária, também tenho experiência com <b>copywriting</b>, tendo produzido diversos
                    conteúdos como <b>freelancer</b> para empresas como a Rock Content.</p>
                <p><a href="../contact">Entre em contato comigo para trabalharmos juntos!</a></p>
            </div>
        </div>,
        dev: <div className="contentText d-flex justify-content-center flex-column flex-md-row mt-2">
            <div className="contentLeft col-md-5 mx-auto mx-md-0 me-md-2">
                <figure className="figure"><a
                    href="https://medium.com/lets-make-something-up?source=user_profile---------4----------------------------">
                    <img src="../images/letsMakeThumb.png" className="figure-img img-fluid rounded" width="350"
                        alt="..." /></a>
                    <figcaption className="figure-caption text-center">Publicação <i>Let's make something up!</i></figcaption>
                </figure>
            </div>
            <div className="contentRight col-md-5 ms-md-2 mt-2 mt-md-0">
                Quando criança o uso da internet mudou para sempre a minha vida. Essa é uma história que eu já contei
                com milhares de palavras, no texto <a
                    href="https://medium.com/impublic%C3%A1vel/todo-problema-no-computador-era-culpa-minha-as-vezes-era-4d171aa77755">Todo
                    problema no computador era culpa minha</a>. Por muito tempo eu estive certo de que o meu futuro
                seria na tecnologia, mas muita aconteceu de lá para cá.
                O que não mudou foi o meu interesse por aprender e por criar coisas novas.
                <p>Concluí, recentemente, três cursos de programação:</p>
                <p>Primeiro, o <a
                    href="https://www.codecademy.com/profiles/thebigfundamentals/certificates/705dcb15de0da4dd9d9fc4f3274b430e">Learn
                    JavaScript Course</a>, da <b>Codecademy</b>, que me deu uma ótima base para explorar as
                    possibilidades do <b>JavaScript</b>. Em seguida, fiz o curso de 42.5 horas ministrado pelo
                    <b>Fernando
                        Daciuk</b>, <a
                            href="https://www.udemy.com/certificate/UC-0cda7988-dcce-4091-b00f-fa9e7cd2f466/">JavaScript
                        Ninja</a>, totalmente voltado para JS.
                    Com essa bagagem, completei o famoso <a
                        href="https://ude.my/UC-df46f9bf-8030-49b0-9ecf-a724f7f7c5b8">The Web Developer Bootcamp
                        2021</a>,
                    criado pelo <b>Colt Steele</b>. Este Bootcamp é, provavelmente, o curso online de <b>web development</b>
                    mais
                    famoso do mundo - e com razão. As mais de 60 horas de curso me possibilitaram ter contato com
                    <b>HTML,
                        CSS, JavaScript, Node.js, MongoDB, Mongoose, Express</b> e muito mais.</p>
                <p>A extensão do curso pode ser vista no projeto final, o gigantesco <a
                    href="https://github.com/thebigfundamentals/yelp-camp-colt-steele">YelpCamp</a>.</p>
                <p>Buscando unir minha experiência na escrita com a tecnologia, criei a publicação <a
                    href="https://medium.com/lets-make-something-up">Let's make something
                    up!</a>, em que compartilho minhas experiências nessa jornada de aprendizado. Produzi alguns
                    pequenos projetos, como <a href="https://tiodopave.herokuapp.com/">O Tio do Pavê</a>, que fornece
                    piadas
                    aleatórias a partir de um banco de dados local, e também alimenta o bot do <a
                        href="https://twitter.com/TioDoPaveBot">Tio do Pavê no Twitter</a>.</p>
                <p>Estou no <a href="https://twitter.com/tbfundamentals">twitter falando de tecnologia como o
                    thebigfundamentals</a> e no <a href="https://github.com/thebigfundamentals">GitHub</a>, com o
                    mesmo usuário.</p>
                <p>Se você está em busca de alguém com <b>talento para contar histórias</b> e <b>disposição para aprender e criar
                    ainda mais com linguagens de programação</b>, <a href="../contact">é só me avisar!</a></p>
            </div>
        </div>,
        contact: <div className="content col-md-8 col-10 d-flex flex-column align-items-center justify-content-center">
            <div className="header mb-auto fs-5">
                <img src="../images/contactThumb.png" alt="" width="40" className="d-inline-block align-text-center" />
                fale comigo
            </div>
            <div className="contentText justify-content-center col-10 col-md-6 mt-2">
                <form action="https://formsubmit.co/gabrielschincariol@gmail.com" method="POST" className="needs-validation" noValidate>
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col mb-2">
                                <input type="text" name="name" className="form-control" placeholder="Nome" required />
                                <div className="valid-feedback">Tudo certo!</div>
                                <div className="invalid-feedback">
                                    Por favor, informe o seu nome.
                                </div>
                            </div>
                            <div className="col mb-2">
                                <input type="email" name="email" className="form-control" placeholder="E-mail" required />
                                <div className="valid-feedback">Tudo certo!</div>
                                <div className="invalid-feedback">
                                    Por favor, informe um endereço de e-mail válido.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group mb-2">
                        <textarea placeholder="Mensagem" className="form-control" name="message" rows="4" required></textarea>
                        <div className="valid-feedback">Tudo certo!</div>
                        <div className="invalid-feedback">
                        </div>
                    </div>
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_subject" value="Nova mensagem enviada pelo site gschincariol.com" />
                    <input type="hidden" name="_template" value="box" />
                    <input type="hidden" name="_next" value="https://www.gschincariol.com/thanks" />
                    <button type="submit" className="btn btn-sm btn-danger btn-block w-100">Enviar</button>
                </form>
            </div>
        </div>,
        thanks: <div className="content col-md-8 col-10 d-flex flex-column align-items-center justify-content-center">
            <div className="header mb-auto fs-5">
                <img src="../images/contactThumb.png" alt="" width="40" className="d-inline-block align-text-center" />
                fale comigo
            </div>
            <div className="contentText d-flex justify-content-center col-6">
                <p className="mt-5 text-center">Sua mensagem foi enviada! Responderei o mais rápido possível.</p>
            </div>
        </div>
    },
    en: {
        navbar: <div className="menu col-md-8 col-lg-6">
            <nav className="navbar navbar-light bg-transparent">
                <div className="container-fluid justify-content-evenly">
                    <NavLink className="navbar-brand fs-6" to="/">
                        <img src="images/homeIcon.png" alt="" width="30" className="d-inline-block align-text-center" />
                        <span className="d-none d-md-inline-block">home</span>
                    </NavLink>
                    <NavLink className="navbar-brand fs-6" to="/writing">
                        <img src="images/writingIcon.png" alt="" width="30" className="d-inline-block align-text-center" />
                        <span className="d-none d-md-inline-block">writing</span>
                    </NavLink>
                    <NavLink className="navbar-brand fs-6" to="/dev">
                        <img src="images/devIcon.png" alt="" width="30" className="d-inline-block align-text-center" />
                        <span className="d-none d-md-inline-block">development</span>
                    </NavLink>
                    <NavLink className="navbar-brand fs-6" to="/contact">
                        <img src="images/contactIcon.png" alt="" width="30" className="d-inline-block align-text-center" />
                        <span className="d-none d-md-inline-block">talk to me</span>
                    </NavLink>
                </div>
            </nav>
            <hr />
            <div className="newsletter-header">
                <Link to="/newsletter"><h5>newsletter <i>Eu posso estar errado</i></h5></Link>
            </div>
            <hr />
        </div>,
        home: {
            main: <div><h5>Who am I?</h5>
                I am <b>Gabriel Schincariol Cavalcante</b>, born in Boituva, a small city in the state of São Paulo.
                At 17 I went to the <b>Air Force Cadets School</b>, where I started to write more frequently as a way to
                face
                the strict military routine. I graduated from Law School at the University of São Paulo (#1 in Brazil
                and
                South America, #46 World Wide). However, I am not a lawyer, but a
                <b>writer</b>. In 2021 my first book was published, <a
                    href="https://www.editorapatua.com.br/produto/243131/um-mundo-em-que-existem-baleias-de-gabriel-schincariol-cavalcante">Um
                    mundo em que existem baleias<i>(A World With Whales)</i></a>, by Patuá, an indie publisher. At the
                moment, besides writing fiction and non-fiction, I've been studying <a href="/dev">web development</a>,
                as a way to put together my writing and creative skills with tech tools.</div>,
            lastTexts: <h5>Last texts</h5>
        },
        error: <div><h2>404</h2>
            <h5>There's nothing to be seen here. But since you made the trip already, take a picture of Bud, who is a really good boy, with you:</h5></div>,
        writing: <div className="contentText d-flex justify-content-center flex-column flex-md-row mt-2">
            <div className="contentLeft col-md-5 me-md-2">
                <figure className="figure"><a
                    href="https://www.editorapatua.com.br/produto/243131/um-mundo-em-que-existem-baleias-de-gabriel-schincariol-cavalcante">
                    <img src="../../images/baleiasThumb.jpg" className="figure-img img-fluid rounded" alt="..." /></a>
                    <figcaption className="figure-caption">Um mundo em que existem baleias - <i>A World With Whales </i>
                        (Editora Patuá, 2021). <p><i>A
                            World With Whales is a short stories collection about the childhood universe, but it is
                            not a book for childs. Through the amazed eyes of kids and teenagers, the stories
                            explore love, motherhood, fatherhood, hate, sex, self-discovery, desire and much more.
                            "If there are whales out there, everything is possible". This is, indeed, a world with
                            whales.</i></p>
                    </figcaption>
                </figure>
            </div>
            <div className="contentRight col-md-5 ms-md-2 mt-2 mt-md-0">
                <p>Since 2013 I've been actively writing, with over 500 fiction and non-fiction pieces published on <a
                    href="https://gschincariol.medium.com">Medium</a>. In this period, I engaged in several
                    challenges and events, with some accolades:</p>
                <ul>
                    <li><a href="https://gazetaarcadas.com/2019/11/06/escrevendo-no-largo-sao-francisco/">Nascente
                        USP 2019 (Short stories)</a></li>
                    <li><a href="https://www.fab.mil.br/noticias/imprime/21231/">Brazil's Portuguese Language Olympics
                        2014 (Opinion)</a></li>
                    <li><a
                        href="https://gschincariol.medium.com/75-rue-jo%C3%A3o-adolfo-app-114-centre-ville-57724e2e6292">Travessias
                        / Traversées (Short story)</a></li>
                    <li><a href="https://www.prefeiturarp.usp.br/cultura/POETADEGAVETA/PDF/PG22.pdf">Poeta de Gaveta
                        (Pocket Poet) -
                        USP Ribeirão Preto</a></li>
                </ul>
                <p>Three of my stories have become eBooks, availabe on <a
                    href="https://www.amazon.com.br/Gabriel-Schincariol-Cavalcante/e/B094JXP92M%3Fref=dbs_a_mng_rwt_scns_share">Amazon</a>:
                </p>
                <ul>
                    <li><a href="https://www.amazon.com.br/gp/product/B08RSKW39G/ref=dbs_a_def_rwt_bibl_vppi_i0">esses
                        sapatos não me servem mais</a></li>
                    <li><a href="https://www.amazon.com.br/gp/product/B08BC2P2D2/ref=dbs_a_def_rwt_bibl_vppi_i1">A
                        história dos homens (Nascente 2019)</a></li>
                    <li><a href="https://www.amazon.com.br/gp/product/B08R5B7Z85/ref=dbs_a_def_rwt_bibl_vppi_i2">A
                        solidão de Samir Fausto na história de acontecimentos ordinários</a></li>
                </ul>
                <p>My first book was published in 2021, <a
                    href="https://www.editorapatua.com.br/produto/243131/um-mundo-em-que-existem-baleias-de-gabriel-schincariol-cavalcante">Um
                    mundo em que existem baleias <i>(A World With Whales</i></a>, by Patuá, an indie publisher from
                    Brazil.
                </p>
                <p>Besides my literary production, I also have experience in <b>copywriting</b>, after working as a
                    <b>freelance writer</b> for marketing companies as Rock Content.</p>
                <p><a href="../contact">Get in touch so we can work together!</a></p>
            </div>
        </div>,
        dev: <div className="contentText d-flex justify-content-center flex-column flex-md-row mt-2">
            <div className="contentLeft col-md-5 mx-auto mx-md-0 me-md-2">
                <figure className="figure"><a
                    href="https://medium.com/lets-make-something-up?source=user_profile---------4----------------------------">
                    <img src="../../images/letsMakeThumb.png" className="figure-img img-fluid rounded" width="350"
                        alt="..." /></a>
                    <figcaption className="figure-caption text-center"><i>Let's make something up!</i> publication
                    </figcaption>
                </figure>
            </div>
            <div className="contentRight col-md-5 ms-md-2 mt-2 mt-md-0">
                <p>As a kid, the internet changed my life forever. For a long time I was certain that my future would be
                    in
                    tech. A lot have changed since I was a kid, but one thing haven't:
                    my enthusiasm and curiosity in learning and making new stuff up.</p>
                <p>Recently, I went through some courses:</p>
                <p>First, <a
                    href="https://www.codecademy.com/profiles/thebigfundamentals/certificates/705dcb15de0da4dd9d9fc4f3274b430e">Learn
                    JavaScript Course</a>, from <b>Codecademy</b>, which gave me a solid foundation on
                    <b>JavaScript</b>. After that, I took the 42.5 hours course ministred by
                    <b>Fernando
                        Daciuk</b>, <a
                            href="https://www.udemy.com/certificate/UC-0cda7988-dcce-4091-b00f-fa9e7cd2f466/">JavaScript
                        Ninja</a>, focused on deep javascript knowledge.
                    With those two courses in my bag, I finished the famous <a
                        href="https://ude.my/UC-df46f9bf-8030-49b0-9ecf-a724f7f7c5b8">The Web Developer Bootcamp
                        2021</a>,
                    by <b>Colt Steele</b>. This bootcamp is, arguably, the most famous <b>web
                        development</b> online course in the world. With more than 60 hours of videos, I got in close
                    contact with
                    <b>HTML,
                        CSS, JavaScript, Node.js, MongoDB, Mongoose, Express</b> and more.</p>
                <p>The size of the bootcamp can be seen in the huge final project: <a
                    href="https://github.com/thebigfundamentals/yelp-camp-colt-steele">YelpCamp</a>.</p>
                <p>Looking for a way to connect my experience in writing and my interest in development, I created the
                    <a href="https://medium.com/lets-make-something-up">Let's make something
                        up!</a> publication, where I share my thoughts during this journey.</p>
                <p>I'm on <a href="https://twitter.com/tbfundamentals">twitter as
                    thebigfundamentals</a> and on <a href="https://github.com/thebigfundamentals">GitHub</a>,
                    with the same username.</p>
                <p>If you are looking for someone <b>talented in telling stories</b> and <b>who is willing to learn
                    and create</b>, <a href="../contact">get in touch!</a></p>

            </div>
        </div>,
        contact: <div className="content col-md-8 col-10 d-flex flex-column align-items-center justify-content-center">
            <div className="header mb-auto fs-5">
                <img src="../../images/contactThumb.png" alt="" width="40" className="d-inline-block align-text-center" />
                talk to me
            </div>
            <div className="contentText justify-content-center col-10 col-md-6 mt-2">
                <form action="https://formsubmit.co/gabrielschincariol@gmail.com" method="POST" className="needs-validation"
                    noValidate>
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col mb-2">
                                <input type="text" name="name" className="form-control" placeholder="Name" required />
                                <div className="valid-feedback">All good!</div>
                                <div className="invalid-feedback">
                                    Please, inform your name.
                                </div>
                            </div>
                            <div className="col mb-2">
                                <input type="email" name="email" className="form-control" placeholder="Email" required />
                                <div className="valid-feedback">All good!</div>
                                <div className="invalid-feedback">
                                    Please, inform a valid email address.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group mb-2">
                        <textarea placeholder="Message" className="form-control" name="message" rows="4" required></textarea>
                        <div className="valid-feedback">All good!</div>
                        <div className="invalid-feedback">
                        </div>
                    </div>
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_subject" value="Nova mensagem enviada pelo site gschincariol.com" />
                    <input type="hidden" name="_template" value="box" />
                    <input type="hidden" name="_next" value="https://www.gschincariol.com/thanks" />
                    <button type="submit" className="btn btn-sm btn-danger btn-block w-100">Submit</button>
                </form>
            </div>
        </div>,
        thanks: <div className="content col-md-8 col-10 d-flex flex-column align-items-center justify-content-center">
            <div className="header mb-auto fs-5">
                <img src="../../images/contactThumb.png" alt="" width="40" className="d-inline-block align-text-center" />
                talk to me
            </div>
            <div className="contentText d-flex justify-content-center col-6">
                <p className="mt-5 text-center">Done! I'll reply as soon as possible.</p>
            </div>
        </div>
    }
}

export default content;