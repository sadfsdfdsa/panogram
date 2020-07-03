<template>
    <div id="main">
        <b-container fluid>
            <b-row align-h="start" align-v="center" class="fixed-top text-white cont">
                <b-col sm="4">
                    <b-navbar>
                        <router-link tag="h2" to="/"
                                     class=" header-font navbar-header-font navbar-item-brand non-select">
                            <span class="gradient">panogram</span>
                        </router-link>
                        <router-link tag="div" to="/" class="ml-3 navbar-font navbar-item non-select"><span
                                class="gradient">community</span>
                        </router-link>
                        <router-link tag="div" to="/" class="ml-3 navbar-font navbar-item non-select"><span
                                class="gradient">blog</span>
                        </router-link>
                    </b-navbar>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped lang="scss">

</style>