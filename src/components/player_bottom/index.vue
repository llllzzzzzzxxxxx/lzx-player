<template>
    <div class="bottom">
        <div class="left">
            <div class="last" @click="lastMusic">
                <svg t="1740403359449" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="3008" width="48" height="48">
                    <path
                        d="M256 224a32 32 0 0 1 32 32v512a32 32 0 0 1-64 0V256a32 32 0 0 1 32-32z m385.952 30.624a96 96 0 0 1 157.44 73.76v366.72a96 96 0 0 1-157.44 73.76l-220.032-183.36a96 96 0 0 1 0-147.52z m86.048 53.28a32 32 0 0 0-45.056-4.096l-220.032 183.36a32 32 0 0 0-4.096 4.096l-2.4 3.232a32 32 0 0 0 6.496 41.824l220.032 183.36a32 32 0 0 0 52.48-24.576v-366.72a32 32 0 0 0-7.424-20.48z"
                        fill="#bfbfbf" p-id="3009"></path>
                </svg>
            </div>
            <div class="play" @click="togglePlay">
                <Audio :src="musicUrl" ref="audioPlayer" @end="nextMusic"></Audio>
                <span v-if="!musicStore.musicState">
                    <svg t="1740541849162" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="5904" width="32" height="32">
                        <path
                            d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z"
                            fill="#bfbfbf" p-id="5905"></path>
                    </svg>
                </span>
                <span v-else>
                    <svg t="1740541886832" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="6210" width="32" height="32">
                        <path
                            d="M128 106.858667C128 94.976 137.621333 85.333333 149.12 85.333333h85.76c11.648 0 21.12 9.6 21.12 21.525334V917.12c0 11.882667-9.621333 21.525333-21.12 21.525333H149.12A21.290667 21.290667 0 0 1 128 917.141333V106.88z m640 0c0-11.882667 9.621333-21.525333 21.12-21.525334h85.76c11.648 0 21.12 9.6 21.12 21.525334V917.12c0 11.882667-9.621333 21.525333-21.12 21.525333h-85.76a21.290667 21.290667 0 0 1-21.12-21.525333V106.88z"
                            fill="#bfbfbf" p-id="6211"></path>
                    </svg>
                </span>
            </div>
            <div class="next" @click="nextMusic">
                <svg t="1740403378507" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="3330" width="48" height="48">
                    <path
                        d="M768 224a32 32 0 0 1 32 32v512a32 32 0 0 1-64 0V256a32 32 0 0 1 32-32z m-386.336 31.36l220.032 183.36a96 96 0 0 1 0 147.52l-220.032 183.36a96 96 0 0 1-157.44-73.76v-366.72a96 96 0 0 1 157.44-73.76zM295.616 308.64a32 32 0 0 0-7.424 20.48v366.72a32 32 0 0 0 52.48 24.576l220.032-183.36a32 32 0 0 0 6.496-41.824l-2.4-3.264a32 32 0 0 0-4.096-4.096l-220.032-183.36a32 32 0 0 0-45.056 4.128z"
                        fill="#bfbfbf" p-id="3331"></path>
                </svg>
            </div>
        </div>
        <div class="middle">
            <input type="range" class="progress-bar" min="0" max="100" v-model="progress"
                @input="handleProgressChange" />
            <div class="time">{{ musicStore.currentTime }} / {{ duration }}</div>
        </div>
        <div class="right">
            <div class="play-sequence" @click="musicStore.toggleSequence">
                <span class="sequence" v-if="musicStore.sequence === 0">
                    <svg t="1740473273739" class="icon" viewBox="0 0 1280 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="10986" width="32" height="32">
                        <path
                            d="M1121.80831062 243.68144937A373.40506031 373.40506031 0 0 1 1231.88943875 509.4737225c0 34.21394156-4.59385594 68.15362312-13.71300187 100.79056875a42.40746 42.40746 0 0 1-81.66093094-22.62645469 291.88125938 291.88125938 0 0 0 10.62757687-78.16411406c0-160.510695-130.61634937-291.12704437-291.12704437-291.12704531H461.52723687v75.07868906c0 24.13488469-16.79842781 33.45972656-37.26508406 20.77519969L243.52477906 202.23389938c-20.46665625-12.68452781-20.67235125-33.76826906-0.41139-46.86418594L424.70782531 38.08925844c20.22667875-13.06163531 36.81941156-4.04533594 36.81941156 20.05526625v75.42151406h394.48880157c100.37917875 0 194.79320156 39.11634 265.79227218 110.11541063z m-70.00487812 573.06637782c20.50093875 12.68452781 20.70663375 33.76826906 0.4456725 46.82990344l-181.59443625 117.280455c-20.22667875 13.09591781-36.81941156 4.07961844-36.81941156-20.02098375V885.38140531H407.875115c-100.37917875 0-194.79320156-39.0820575-265.79227219-110.11541062A373.43934281 373.43934281 0 0 1 32.00171469 509.4737225c0-72.61034906 20.74091625-143.09518219 59.99438625-203.84378344a42.3731775 42.3731775 0 1 1 71.20476562 46.04140594 290.03000438 290.03000438 0 0 0-46.41851343 157.8023775c0 160.5449775 130.58206688 291.12704437 291.09276187 291.12704437H833.86953969v-75.07868906c0-24.10060219 16.76414531-33.45972656 37.23080156-20.74091625l180.73737375 111.96666563z"
                            p-id="10987" fill="#bfbfbf"></path>
                    </svg>
                </span>
                <span class="random" v-else-if="musicStore.sequence === 1">
                    <svg t="1740477957465" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="15337" width="32" height="32">
                        <path
                            d="M823.456 243l-109.68-109.72c-15.619-15.625-15.614-40.951 0.01-56.57 15.623-15.618 40.95-15.613 56.568 0.01l177.935 178C973.481 279.923 955.633 323 920 323H747.43c-37.616 0-72.746 18.808-93.615 50.122l-23.12 34.693c-12.25 18.383-37.085 23.354-55.468 11.103-18.383-12.25-23.354-37.085-11.103-55.468l23.12-34.692C622.948 275.182 683.059 243 747.43 243h76.025zM394.812 617.51c12.251-18.383 37.085-23.354 55.468-11.103 18.383 12.25 23.354 37.085 11.103 55.468l-72.885 109.367C352.794 824.818 292.683 857 228.311 857H104c-22.091 0-40-17.909-40-40s17.909-40 40-40h124.311c37.617 0 72.747-18.808 93.616-50.122l72.885-109.368zM742.888 781c-61.531 0-118.99-30.757-153.114-81.96L319.396 293.325A104 104 0 0 0 232.854 247H104c-22.091 0-40-17.909-40-40s17.909-40 40-40h128.854c61.531 0 118.99 30.757 153.114 81.96l270.378 405.714A104 104 0 0 0 742.888 701H920c35.633 0 53.481 43.078 28.29 68.28l-177.936 178c-15.618 15.623-40.945 15.628-56.569 0.01-15.623-15.619-15.628-40.945-0.01-56.57L823.456 781h-80.568z"
                            fill="#bfbfbf" p-id="15338"></path>
                    </svg>
                </span>
                <span class="single" v-else>
                    <svg t="1740478038691" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="16419" width="32" height="32">
                        <path
                            d="M928 476.8c-19.2 0-32 12.8-32 32v86.4c0 108.8-86.4 198.4-198.4 198.4H201.6l41.6-38.4c6.4-6.4 12.8-16 12.8-25.6 0-19.2-16-35.2-35.2-35.2-9.6 0-22.4 3.2-28.8 9.6l-108.8 99.2c-16 12.8-12.8 35.2 0 48l108.8 96c6.4 6.4 19.2 12.8 28.8 12.8 19.2 0 35.2-12.8 38.4-32 0-12.8-6.4-22.4-16-28.8l-48-44.8h499.2c147.2 0 265.6-118.4 265.6-259.2v-86.4c0-19.2-12.8-32-32-32zM96 556.8c19.2 0 32-12.8 32-32v-89.6c0-112 89.6-201.6 198.4-204.8h496l-41.6 38.4c-6.4 6.4-12.8 16-12.8 25.6 0 19.2 16 35.2 35.2 35.2 9.6 0 22.4-3.2 28.8-9.6l105.6-99.2c16-12.8 12.8-35.2 0-48l-108.8-96c-6.4-6.4-19.2-12.8-28.8-12.8-19.2 0-35.2 12.8-38.4 32 0 12.8 6.4 22.4 16 28.8l48 44.8H329.6C182.4 169.6 64 288 64 438.4v86.4c0 19.2 12.8 32 32 32z"
                            p-id="16420" fill="#bfbfbf"></path>
                        <path d="M544 672V352h-48L416 409.6l16 41.6 60.8-41.6V672z" p-id="16421" fill="#8a8a8a"></path>
                    </svg>
                </span>
            </div>
            <div class="comment" @click="showComment" :class="{ 'comment-active': musicStore.musicUrl }">
                <svg t="1740473417857" class="icon" viewBox="0 0 1114 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="12552" width="32" height="32">
                    <path
                        d="M412.43236215 880.21486555h-7.85199339c-19.62998309-3.92599633-35.33396983-15.70398675-43.18596322-31.40797352l-27.48197645-66.74194336h-62.81594705c-70.66793969 0-129.55789039-58.88994998-129.55788966-129.55789038V271.68538194c0-74.59393674 58.88994998-129.55789039 129.55788966-129.55789039h526.08355351c70.66793969 0 129.55789039 54.96395365 129.55789039 129.55789039v380.82167634c0 70.66793969-58.88994998 129.55789039-129.55789039 129.55789039h-282.6717602l-58.88994997 78.51993306c-7.85199338 11.77798971-23.55598013 19.62998309-43.18596323 19.62998381z m-141.33588011-679.19742403c-39.25996689 0-70.66793969 31.40797353-70.66793967 70.66794042v380.82167635c0 39.25996689 31.40797353 70.66793969 70.66793967 70.66794039h102.07591322l39.25996689 94.22391984 70.66794042-94.22391984h310.15373665c39.25996689 0 70.66793969-31.40797353 70.66793969-70.66794039V271.68538194c0-39.25996689-31.40797353-70.66793969-70.66793969-70.66794042H271.09648204zM346.41018531 337.51125953h374.80181521a30.71001833 30.71001833 0 0 1 0 61.4418473H346.41018531a30.71001833 30.71001833 0 1 1 0-61.4418473z m0.23992193 202.23245021h190.06186059a30.97175162 30.97175162 0 1 1 0 61.89988056H346.67191787a30.97175162 30.97175162 0 1 1 0-61.89988056z"
                        fill="#bfbfbf" p-id="12553"></path>
                </svg>
            </div>
            <div class="download" @click="downloadMusic" :class="{ 'download-active': musicStore.musicUrl }">
                <svg t="1741440938790" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="3235" width="26" height="26">
                    <path
                        d="M102.760931 509.188218c0-2.556166 0.511233-5.112332 1.533699-7.668498-0.511233 2.044933-1.022466 4.601098-1.533699 7.668498zM116.052993 482.604094l-1.5337 1.533699 1.5337-1.533699z"
                        p-id="3236" fill="#bfbfbf"></path>
                    <path
                        d="M511.236218 1.533699C229.035519 1.533699 0.003067 230.566151 0.003067 512.76685s229.032451 511.23315 511.233151 511.23315 511.23315-229.032451 511.23315-511.23315S793.436917 1.533699 511.236218 1.533699z m0 940.668997c-237.212182 0-429.435846-192.223665-429.435847-429.435846s192.223665-429.435846 429.435847-429.435847 429.435846 192.223665 429.435846 429.435847-192.223665 429.435846-429.435846 429.435846z"
                        p-id="3237" fill="#bfbfbf"></path>
                    <path
                        d="M655.403966 548.55317l-115.538692 115.538692c-1.022466 1.022466-2.044933 1.533699-3.067399 2.556166-1.022466 0.511233-1.533699 1.533699-2.556166 2.044933h-0.511233c-0.511233 0-0.511233 0.511233-1.022466 0.511233-0.511233 0.511233-1.533699 1.022466-2.556166 1.533699l-0.511233 0.511233c-1.022466 0.511233-2.044933 1.022466-3.578632 1.5337-1.022466 0.511233-2.044933 1.022466-3.067399 1.022466h-0.511233c-1.022466 0.511233-2.556166 0.511233-3.578632 1.022466-1.533699 0.511233-2.556166 0.511233-4.089865 0.511234h-8.179731c-1.533699 0-2.556166-0.511233-4.089865-0.511234s-2.556166-0.511233-3.578632-1.022466h-0.511233c-1.022466-0.511233-2.044933-1.022466-3.067399-1.022466-1.022466-0.511233-2.556166-1.022466-3.578632-1.5337 0 0-0.511233 0-0.511233-0.511233-1.022466-0.511233-1.533699-1.022466-2.556166-1.533699-0.511233 0-0.511233-0.511233-1.022466-0.511233h-0.511233c-1.022466-0.511233-1.533699-1.533699-2.556166-2.044933-1.022466-1.022466-2.044933-1.533699-3.067399-2.556166l-115.538692-115.538692c-15.848228-15.848228-15.848228-41.921118 0-57.769346 8.17973-8.17973 18.404393-11.758362 29.14029-11.758362 10.224663 0 20.960559 4.089865 29.140289 11.758362l46.010984 46.010984V267.374938c0-22.494259 18.404393-40.898652 40.898652-40.898652 11.247129 0 21.471792 4.601098 29.140289 11.758362 7.157264 7.668497 11.758362 17.89316 11.758363 29.14029V536.794808l46.010983-46.010984c15.848228-15.848228 41.921118-15.848228 57.769346 0 15.848228 15.848228 15.848228 41.921118-0.511233 57.769346z m19.42686 250.504244h-327.189216c-22.494259 0-40.898652-18.404393-40.898652-40.898652s18.404393-40.898652 40.898652-40.898652h327.189216c22.494259 0 40.898652 18.404393 40.898652 40.898652s-18.404393 40.898652-40.898652 40.898652z"
                        p-id="3238" fill="#bfbfbf"></path>
                </svg>

            </div>
            <div class="volume">
                <span v-if="volumeLevel === 'none'" class="volume-icon-none" @click="toggleVolume">
                    <svg t="1740473567185" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="13697" width="32" height="32">
                        <path
                            d="M0.002433 672V352a53.393333 53.393333 0 0 1 53.333334-53.333333h172.5l207.08-207.086667A21.333333 21.333333 0 0 1 469.335767 106.666667v189.413333L41.435767 724A53.42 53.42 0 0 1 0.002433 672z m633.753334-452.42a21.333333 21.333333 0 0 0-30.173334 0l-597.333333 597.333333a21.333333 21.333333 0 0 0 30.173333 30.173334L158.1691 725.333333h67.666667l207.08 207.086667A21.333333 21.333333 0 0 0 469.335767 917.333333V414.166667l164.42-164.413334a21.333333 21.333333 0 0 0 0-30.173333z"
                            fill="#bfbfbf" p-id="13698"></path>
                    </svg>
                </span>
                <span v-else-if="volumeLevel === 'min'" class="volume-icon-min" @click="toggleVolume">
                    <svg t="1740473593839" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="13861" width="32" height="32">
                        <path
                            d="M469.333333 106.666667v810.666666a21.333333 21.333333 0 0 1-36.42 15.086667L225.833333 725.333333H53.333333a53.393333 53.393333 0 0 1-53.333333-53.333333V352a53.393333 53.393333 0 0 1 53.333333-53.333333h172.5l207.08-207.086667A21.333333 21.333333 0 0 1 469.333333 106.666667z m176.753334 299.726666a21.333333 21.333333 0 0 0-33.486667 26.433334 127.366667 127.366667 0 0 1 0 158.346666 21.333333 21.333333 0 0 0 33.493333 26.433334 170.733333 170.733333 0 0 0 0-211.213334z"
                            fill="#bfbfbf" p-id="13862"></path>
                    </svg>
                </span>
                <span v-else-if="volumeLevel === 'middle'" class="volume-icon-middle" @click="toggleVolume">
                    <svg t="1740473604692" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="14025" width="32" height="32">
                        <path
                            d="M469.333333 106.666667v810.666666a21.333333 21.333333 0 0 1-36.42 15.086667L225.833333 725.333333H53.333333a53.393333 53.393333 0 0 1-53.333333-53.333333V352a53.393333 53.393333 0 0 1 53.333333-53.333333h172.5l207.08-207.086667A21.333333 21.333333 0 0 1 469.333333 106.666667z m146.793334 296.2a21.333333 21.333333 0 0 0-3.526667 29.96 127.366667 127.366667 0 0 1 0 158.346666 21.333333 21.333333 0 0 0 33.493333 26.433334 170.733333 170.733333 0 0 0 0-211.213334 21.333333 21.333333 0 0 0-29.966666-3.526666z m212.213333-19.3A339.393333 339.393333 0 0 0 753.333333 270.666667a346.585333 346.585333 0 0 0-22.046666-20.213334 21.333333 21.333333 0 1 0-27.446667 32.666667c6.666667 5.586667 13.146667 11.553333 19.333333 17.726667C779.6 357.22 810.666667 432.22 810.666667 512s-31.066667 154.78-87.48 211.186667c-6.173333 6.173333-12.666667 12.14-19.333334 17.726666a21.333333 21.333333 0 1 0 27.446667 32.666667 346.585333 346.585333 0 0 0 22.046667-20.213333 341.706667 341.706667 0 0 0 74.98-369.793334z"
                            fill="#bfbfbf" p-id="14026"></path>
                    </svg>
                </span>
                <span v-else-if="volumeLevel === 'max'" class="volume-icon-max" @click="toggleVolume">
                    <svg t="1740473618739" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="14189" width="32" height="32">
                        <path
                            d="M469.333333 106.666667v810.666666a21.333333 21.333333 0 0 1-36.42 15.086667L225.833333 725.333333H53.333333a53.393333 53.393333 0 0 1-53.333333-53.333333V352a53.393333 53.393333 0 0 1 53.333333-53.333333h172.5l207.08-207.086667A21.333333 21.333333 0 0 1 469.333333 106.666667z m146.793334 296.2a21.333333 21.333333 0 0 0-3.526667 29.96 127.366667 127.366667 0 0 1 0 158.346666 21.333333 21.333333 0 0 0 33.493333 26.433334 170.733333 170.733333 0 0 0 0-211.213334 21.333333 21.333333 0 0 0-29.966666-3.526666zM853.333333 512a340.32 340.32 0 0 0-100-241.333333 346.585333 346.585333 0 0 0-22.046666-20.213334 21.333333 21.333333 0 1 0-27.446667 32.666667c6.666667 5.586667 13.146667 11.553333 19.333333 17.726667C779.6 357.22 810.666667 432.22 810.666667 512s-31.066667 154.78-87.48 211.186667c-6.173333 6.173333-12.666667 12.14-19.333334 17.726666a21.333333 21.333333 0 1 0 27.446667 32.666667 346.585333 346.585333 0 0 0 22.046667-20.213333 340.32 340.32 0 0 0 100-241.333334z m133.173334-192.666667a508.806667 508.806667 0 0 0-112.466667-169.386666 518.346667 518.346667 0 0 0-57.533333-49.653334 21.333333 21.333333 0 0 0-25.42 34.273334 474.246667 474.246667 0 0 1 52.78 45.553333c182.993333 182.993333 182.993333 480.74 0 663.733333a474.853333 474.853333 0 0 1-52.78 45.553334 21.333333 21.333333 0 0 0 25.413333 34.273333 519.026667 519.026667 0 0 0 57.54-49.653333 512.546667 512.546667 0 0 0 112.466667-554.666667z"
                            fill="#bfbfbf" p-id="14190"></path>
                    </svg>
                </span>
                <input type="range" class="volume-slider" min="0" max="1" step="0.01" v-model="volume"
                    @input="setVolume" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue';
import useMusicStore from '@/stores/modules/music';
import { useRouter } from 'vue-router';
import type { PlayListSongs } from '@/api/playlist/type';
import router from '@/router';
import usePlayListStore from '@/stores/modules/playlist';
let $router = useRouter();
const musicStore = useMusicStore();
const playListStore = usePlayListStore();
const audioPlayer = ref<HTMLAudioElement | null>(null);
let musicUrl = ref('');
const progress = ref(0);
const duration = ref('00:00');
const volume = ref(1); // 新增音量控制
const previousVolume = ref(1); // 存储之前的音量值
const lastMusic = () => {
    let lastMusic = playListStore.playPreviousSong();
    if (!lastMusic) return;
    playMusic(lastMusic);
}
const nextMusic = () => {
    let nextMusic = playListStore.playNextSong();
    if (!nextMusic) return;
    playMusic(nextMusic);
};
const playMusic = async (item: PlayListSongs) => {
    const musicStore = useMusicStore();
    await musicStore.getMusicUrl(item.id);
    playListStore.addPlayingSong(item);
    const audioPlayer = document.querySelector('audio') as HTMLAudioElement;
    if (audioPlayer) {
        audioPlayer.currentTime = 0;
        audioPlayer.play();
        musicStore.musicState = true;
        playListStore.addHistorySong(item);
    }
};
const downloadMusic = () => {
    if (!musicUrl.value) return;
    window.open(musicStore.musicUrl);
}
const togglePlay = () => {
    if (!musicUrl.value) return;
    if (audioPlayer.value) {
        if (musicStore.musicState) {
            audioPlayer.value.pause();
        } else {
            audioPlayer.value.play();
        }
        musicStore.musicState = !musicStore.musicState;
    }
};

const handleProgressChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const newTime = (audioPlayer.value?.duration || 0) * (Number(target.value) / 100);
    if (audioPlayer.value) {
        audioPlayer.value.currentTime = newTime;
    }
};

watch(() => musicStore.musicUrl, (newUrl) => {
    musicUrl.value = newUrl;
    if (audioPlayer.value) {
        audioPlayer.value.load();
        if (musicStore.musicState) {
            audioPlayer.value.play();
        }
    }
});

onMounted(() => {
    if (audioPlayer.value) {
        audioPlayer.value.addEventListener('timeupdate', () => {
            if (audioPlayer.value) {
                progress.value = (audioPlayer.value.currentTime / audioPlayer.value.duration) * 100;
                musicStore.currentTime = formatTime(audioPlayer.value.currentTime);
                duration.value = formatTime(audioPlayer.value.duration);
            }
        });
    }
});

const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const setVolume = () => {
    if (audioPlayer.value) {
        audioPlayer.value.volume = volume.value;
        console.log(volumeLevel.value);
    }
};

const toggleVolume = () => {
    if (volume.value === 0) {
        volume.value = previousVolume.value; // 恢复之前的音量
    } else {
        previousVolume.value = volume.value; // 存储当前音量
        volume.value = 0; // 设置为静音
    }
    setVolume();
};

const volumeLevel = computed(() => {
    if (volume.value == 0) {
        return 'none';
    } else if (volume.value < 0.33) {
        return 'min';
    } else if (volume.value < 0.66) {
        return 'middle';
    } else {
        return 'max';
    }
});
const showComment = () => {
    if (!musicStore.song.id) return;
    if (musicStore.comments.length) {
        musicStore.comments = [];
        musicStore.hotComments = [];
        $router.go(-1);
    }
    $router.push({
        path: '/comment',
        query: {
            id: musicStore.song.id
        }
    });
}
</script>

<style scoped lang="scss">
.bottom {
    position: fixed;
    bottom: 0;
    z-index: 999;
    width: 100%;
    height: 70px;
    // background-color: skyblue;
    display: grid;
    justify-content: space-around;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas:
        "left middle right";
    gap: 10px;

    .left {
        grid-area: left;
        justify-content: space-around;
        display: flex;
        align-items: center;
        margin-left: 5vh;

        .last,
        .play,
        .next {
            cursor: pointer;
        }
    }

    .middle {
        grid-area: middle;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        .progress-bar {
            width: 100%;
            height: 4px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 2px;
            outline: none;
            appearance: none;
            cursor: pointer;

            &::-webkit-slider-thumb {
                appearance: none;
                width: 12px;
                height: 12px;
                background: #c7c0c0;
                border-radius: 50%;
                cursor: pointer;
            }
        }

        .time {
            position: absolute;
            top: 00px;
            justify-content: center;
            right: 0;
            color: #fff;
            font-size: 12px;
        }
    }

    .right {
        grid-area: right;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .play-sequence {
            cursor: pointer;
        }
        .comment-active,
        .download-active{
            cursor: pointer;
        }
        .volume {
            position: relative;
            display: flex;
            align-items: center;
            cursor: pointer;

            .volume-icon-none,
            .volume-icon-min,
            .volume-icon-middle,
            .volume-icon-max {
                margin-right: 10px;
            }

            .volume-slider {
                width: 100px;
                background: red;
                cursor: pointer;
            }
        }
    }
}
</style>