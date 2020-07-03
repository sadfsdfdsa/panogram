<template>
    <div id="main">
        <NavBar></NavBar>
        <b-container fluid class="element">
            <b-row v-bind:class="{blur: loading}" style="background-color: black">
                <b-col class="banner" :style="'background-image: url('+this.posts[this.current].img_url+');'">
                    <b-row align-h="center" class="fixed-bottom">
                        <b-col>
                            <b-row align-h="center">
                                <b-col sm="4" class="text-white">
                                    <b-card class="bg-opacity" v-if="this.hide_content && !this.loading"
                                            v-bind:class="{'lg-card': this.posts[this.current].size==='lg'}">
                                        <b-card-body>
                                            <b-row class="justify-content-between">
                                                <b-col cols="7">
                                                    <h3 class="header-font">{{this.posts[this.current].header}}</h3>
                                                </b-col>
                                                <b-col sm="1" class="mr-2" cols="2">
                                                    <button class="btn btn-default" @click="hideContent">
                                                        <b-img :src="hide_button" width="30"
                                                               style="background: transparent"></b-img>
                                                    </button>
                                                </b-col>
                                            </b-row>
                                            <p v-if="hide_content">{{this.posts[this.current].text}}</p>
                                            <b-button v-for="tag in this.posts[this.current].tags" v-bind:key="tag"
                                                      variant="dark" pill size="sm" class="ml-1">{{tag}}
                                            </b-button>
                                        </b-card-body>
                                    </b-card>
                                </b-col>
                            </b-row>
                            <b-row align-h="center">
                                <b-col sm="1" cols="3">
                                    <button class="btn btn-default" @click="prevImg" :disabled="loading">
                                        <b-img :src="button" width="50" class="mirrorY mirrorX"></b-img>
                                    </button>
                                </b-col>
                                <b-col sm="1" cols="3">
                                    <button class="btn btn-default" @click="hideContent" :disabled="loading">
                                        <b-img :src="hide_button" width="50"
                                               style="background: transparent"></b-img>
                                    </button>
                                </b-col>
                                <b-col sm="1" cols="3">
                                    <button class="btn btn-default mirrorXY" :disabled="loading"
                                            @click="nextImg">
                                        <b-img :src="button" width="50"></b-img>
                                    </button>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <div class="spinner fixed-top position-absolute" v-if="loading"></div>
        </b-container>
    </div>
</template>

<script>
    import arrow_bottom from "@/assets/arrow_bottom.png";
    import hide_button from "@/assets/hide.png";

    import NavBar from "../components/NavBar";

    export default {
        name: "IndexPage",
        components: {NavBar},
        data: () => ({
            posts: [
                {
                    img_url: 'https://wallpaperplay.com/walls/full/1/6/3/139661.jpg\n',
                    tags: ['Mountains', 'Forest', 'Nature'],
                    header: 'Wood on mountain',
                    size: 'lg',
                    text: 'Natoque at arcu enim posuere pellentesque libero id elementum magna cursus netus purus rutrum hendrerit suscipit euismod purus aliquet luctus eget turpis sodales mi odio mattis consectetuer est dictumst est nisi donec semper. Vulputate dolor tempor et viverra sodales rutrum magnis curabitur nisl dictum tempus dignissim amet tempus class aenean aenean turpis, lobortis. Lobortis sapien hac tempor aliquet metus adipiscing semper metus porttitor fringilla augue dolor elementum faucibus purus cubilia luctus. Cras diam parturient dapibus conubia rhoncus primis. Convallis felis ullamcorper cubilia dapibus diam facilisis nisi dictum vehicula praesent dis nam mauris praesent non eros suspendisse fermentum sociosqu nostra augue, adipiscing. Congue torquent consectetuer vestibulum mauris libero ultrices. Consectetuer euismod non egestas, tristique elit semper donec.\n' +
                        '\n' +
                        'Semper interdum id habitasse platea Ultrices fusce eget sapien, molestie convallis massa cum accumsan sapien nascetur parturient etiam. Nostra dignissim donec mattis ante platea placerat nullam ut diam. Ullamcorper ut, nisi. Dictumst Hendrerit luctus. Parturient donec molestie et metus tristique nisl aliquet amet nostra posuere habitant Sociosqu platea fermentum amet leo lacinia urna Nulla lectus parturient turpis ornare at hendrerit duis adipiscing ante, arcu dolor. Nisl pede sit fames eu quis curabitur nulla nisl non sapien risus elementum auctor. Nullam sagittis elit nullam semper fringilla ultricies phasellus. Nibh. Nec velit dolor fames turpis lacinia aptent. Euismod rhoncus est montes.\n' +
                        '\n' +
                        'Quis. Elit purus cursus neque fringilla nunc est augue erat class viverra, consectetuer sit tempus feugiat magnis ipsum augue nibh tempus primis nisl. Eleifend nam tempus risus hymenaeos torquent. Quam. Sem imperdiet laoreet. Iaculis magna nec nibh euismod euismod dis, pharetra, pulvinar eget imperdiet, etiam commodo ornare id, accumsan porta, nunc conubia. Amet sapien conubia proin facilisis ornare pede lectus viverra aenean natoque velit torquent parturient nostra. Vestibulum suscipit netus.'
                },
                {
                    img_url: 'https://wallpaperplay.com/walls/full/6/9/4/139651.jpg',
                    tags: ['Mountains', 'Forest', 'Nature'],
                    header: 'Wood on mountain',
                    size: 'lg',
                    text: 'Natoque at arcu enim posuere pellentesque libero id elementum magna cursus netus purus rutrum hendrerit suscipit euismod purus aliquet luctus eget turpis sodales mi odio mattis consectetuer est dictumst est nisi donec semper. Vulputate dolor tempor et viverra sodales rutrum magnis curabitur nisl dictum tempus dignissim amet tempus class aenean aenean turpis, lobortis. Lobortis sapien hac tempor aliquet metus adipiscing semper metus porttitor fringilla augue dolor elementum faucibus purus cubilia luctus. Cras diam parturient dapibus conubia rhoncus primis. Convallis felis ullamcorper cubilia dapibus diam facilisis nisi dictum vehicula praesent dis nam mauris praesent non eros suspendisse fermentum sociosqu nostra augue, adipiscing. Congue torquent consectetuer vestibulum mauris libero ultrices. Consectetuer euismod non egestas, tristique elit semper donec.\n' +
                        '\n' +
                        'Semper interdum id habitasse platea Ultrices fusce eget sapien, molestie convallis massa cum accumsan sapien nascetur parturient etiam. Nostra dignissim donec mattis ante platea placerat nullam ut diam. Ullamcorper ut, nisi. Dictumst Hendrerit luctus. Parturient donec molestie et metus tristique nisl aliquet amet nostra posuere habitant Sociosqu platea fermentum amet leo lacinia urna Nulla lectus parturient turpis ornare at hendrerit duis adipiscing ante, arcu dolor. Nisl pede sit fames eu quis curabitur nulla nisl non sapien risus elementum auctor. Nullam sagittis elit nullam semper fringilla ultricies phasellus. Nibh. Nec velit dolor fames turpis lacinia aptent. Euismod rhoncus est montes.\n' +
                        '\n' +
                        'Quis. Elit purus cursus neque fringilla nunc est augue erat class viverra, consectetuer sit tempus feugiat magnis ipsum augue nibh tempus primis nisl. Eleifend nam tempus risus hymenaeos torquent. Quam. Sem imperdiet laoreet. Iaculis magna nec nibh euismod euismod dis, pharetra, pulvinar eget imperdiet, etiam commodo ornare id, accumsan porta, nunc conubia. Amet sapien conubia proin facilisis ornare pede lectus viverra aenean natoque velit torquent parturient nostra. Vestibulum suscipit netus.'
                },
                {
                    img_url: 'https://wallpaperplay.com/walls/full/b/7/0/139652.jpg',
                    tags: ['Nature', 'Jungles'],
                    header: 'River with a bridge',
                    size: 'sm',
                    text: 'There is an photo of our awesome Planet.'
                },
                {
                    img_url: 'https://wallpaperplay.com/walls/full/3/0/b/139653.jpg',
                    tags: ['Nature'],
                    header: 'Nature', size: 'sm',
                    text: 'There is an photo of our awesome Planet.'
                },
                {
                    img_url: 'https://wallpaperplay.com/walls/full/a/e/a/139654.jpg',
                    tags: ['Nature'],
                    header: 'Nature', size: 'sm',
                    text: 'There is an photo of our awesome Planet.'
                },
                {
                    img_url: 'https://wallpaperplay.com/walls/full/0/f/f/139657.jpg',
                    tags: ['Nature'],
                    header: 'Nature', size: 'sm',
                    text: 'There is an photo of our awesome Planet.'
                },
                {
                    img_url: 'https://wallpaperplay.com/walls/full/6/0/1/139660.jpg',
                    tags: ['Nature'],
                    header: 'Nature', size: 'sm',
                    text: 'There is an photo of our awesome Planet.'
                },
                {
                    img_url: 'https://wallpaperplay.com/walls/full/7/a/1/139656.jpg',
                    tags: ['Nature'],
                    header: 'Nature', size: 'sm',
                    text: 'There is an photo of our awesome Planet.'
                },
                {
                    img_url: 'https://wallpaperplay.com/walls/full/7/d/5/139655.jpg',
                    tags: ['Nature'],
                    header: 'Nature', size: 'sm',
                    text: 'There is an photo of our awesome Planet.'
                },
                {
                    img_url: 'https://wallpaperplay.com/walls/full/6/c/8/139658.jpg',
                    tags: ['Nature'],
                    header: 'Nature', size: 'sm',
                    text: 'There is an photo of our awesome Planet.'
                },
                {
                    img_url: 'https://wallpaperplay.com/walls/full/d/e/1/139659.jpg',
                    tags: ['Nature'],
                    header: 'Nature', size: 'sm',
                    text: 'There is an photo of our awesome Planet.'
                },
                {
                    img_url: 'https://wallpaperplay.com/walls/full/d/2/3/139664.jpg\n',
                    tags: ['Nature'],
                    header: 'Nature', size: 'sm',
                    text: 'There is an photo of our awesome Planet.'
                },
            ],
            current: 0,
            button: arrow_bottom,
            hide_button: hide_button,
            loading: true,
            hide_content: false,
        }),
        methods: {
            nextImg() {
                if (this.current < this.posts.length - 1) {
                    this.current++;
                } else {
                    this.current = 0;
                }
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                }, 100)
            },
            prevImg() {
                if (this.current > 0) {
                    this.current--;
                } else {
                    this.current = this.posts.length - 1;
                }
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                }, 100)
            },
            listenerKeyboard(event) {
                if (event.code === 'ArrowRight') {
                    this.nextImg()
                } else if (event.code === 'ArrowLeft') {
                    this.prevImg()
                } else if (event.code === 'Enter') {
                    this.hideContent()
                }
            },
            hideContent() {
                this.hide_content = !this.hide_content;
            }
        },
        created() {
            window.addEventListener('keyup', this.listenerKeyboard);

            setTimeout(() => {
                this.loading = false;
            }, 300)
        },
        beforeDestroy() {
            window.removeEventListener('keyup', this.listenerKeyboard);
        }
    }
</script>

<style lang="scss" scoped>
    .element {
        width: 100%;
        height: 100%;
        animation: pulse 5s infinite;
    }

    @keyframes pulse {
        0% {
            background-color: #001F3F;
        }
        50% {
            background-color: #000000;
        }
        100% {
            background-color: #001F3F;
        }
    }

    .spinner {
        background-color: #FFDEE9;
        background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        @media (min-width: 800px) {
            padding-right: 4rem;
        }
    }

    .spinner:after {
        animation: changeContent .8s linear infinite;
        display: block;
        content: "⠋";
        font-size: 80px;
    }

    @keyframes changeContent {
        10% {
            content: "⠙";
        }
        20% {
            content: "⠹";
        }
        30% {
            content: "⠸";
        }
        40% {
            content: "⠼";
        }
        50% {
            content: "⠴";
        }
        60% {
            content: "⠦";
        }
        70% {
            content: "⠧";
        }
        80% {
            content: "⠇";
        }
        90% {
            content: "⠏";
        }
    }
</style>