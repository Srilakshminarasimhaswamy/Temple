<template>
  <div class="home">
    <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab" img-width="1024"
      style="text-shadow: 1px 1px 2px #333" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
      <!-- Text slides with image -->
      <b-carousel-slide class="car-slide" caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum.">
        <template #img>
          <img class="d-block img-fluid w-100" width="1024" src="../assets/Temple1.jpg" alt="image slot" />
        </template>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide class="car-slide" caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum.">
        <template #img>
          <img class="d-block img-fluid w-100" width="1024" src="../assets/Temple2.jpg" alt="image slot" />
        </template>
      </b-carousel-slide>

      <b-carousel-slide class="car-slide">
        <template #img>
          <img class="d-block img-fluid w-100" width="1024" src="../assets/Temple1.jpg" alt="image slot" />
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide class="car-slide" caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
          pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>
    <div class="test">
      <hr class="my-5" />
      <main class="main mt-5">
        <div class="container">
          <section>
            <div class="row">
              <div class="gx-5 mb-4">
                <p class="para">
                  Hinduism is one of the world’s oldest religions, rich in diverse beliefs, rituals, and traditions. It
                  encompasses a vast array of practices, philosophies, and spiritual concepts, embracing concepts like
                  karma,
                  dharma, and reincarnation. Hinduism doesn’t have a single founder or central religious text, and it
                  allows
                  for
                  various interpretations and practices. Its core concepts revolve around the pursuit of truth,
                  self-realization, and the interconnectedness of all life.
                  Certainly! Hinduism is deeply rooted in ancient texts such as the Vedas, Upanishads, and Bhagavad Gita.
                  It
                  reveres numerous deities, including Brahma, Vishnu, Shiva, and Devi, among others, each representing
                  different
                  aspects of the divine. Rituals and ceremonies, like puja and yajna, are essential in Hindu practice, as
                  is
                  the
                  belief in the cycle of birth, death, and rebirth (samsara), shaped by one’s actions (karma) in previous
                  lives.
                  Yoga and meditation are also integral parts of Hindu spiritual practices, aiming to attain
                  self-realization
                  and union with the divine (moksha).
                  Hinduism’s diversity is evident in its various sects and traditions, such as Vaishnavism, Shaivism,
                  Shaktism,
                  and others, each with its own beliefs and practices. The caste system, although historically
                  significant,
                  has
                  evolved over time and isn’t universally practiced in the same way across all regions or among all
                  Hindus.
                  Festivals like Diwali, Holi, Navaratri, and others hold immense cultural and religious significance,
                  celebrated with rituals, feasts, and joyous gatherings. Overall, Hinduism’s strength lies in its
                  adaptability,
                  accommodating a wide spectrum of beliefs and practices within its philosophical and spiritual framework.
                  In Hinduism, the concept of dharma, or one’s duty and moral responsibility, plays a significant role. It
                  guides individuals in their actions and behaviors based on their societal roles, aiming for harmony and
                  righteousness in personal and collective life. The philosophy of ahimsa (non-violence) and the
                  interconnectedness of all living beings are fundamental principles, influencing ethical conduct and
                  attitudes
                  towards all forms of life. Hinduism’s openness to diverse beliefs and practices has led to its evolution
                  over
                  millennia, continuously shaping and being shaped by cultural, social, and philosophical influences.
                </p>
              </div>
            </div>
          </section>
          <hr class="my-5" />
          <section>
            <div class="row sklom">
              <div class="gx-5 mb-4">
                <p>
                  నరసింహ స్వామి కేవలం అవతారమూర్తి మాత్రమే కాదు, ఆ స్వామి మంత్రమూర్తి. వేదాంతాలుగా భాసిల్లే ఉపనిషత్తులలో
                  నరసింహ తత్వం వర్ణించబడి వుంది.
                  స్వామి నామ మంత్రాన్ని ఒకసారి పరిశీలిస్తే తన భక్తులకు అభయమిచ్చే అంతరార్ధం అందులో నిబిడీకృతమై వున్నట్లు
                  తెలుస్తుంది.
                </p>
                <h4 class="cen"><strong>ప్రార్థన</strong></h4>
                <p class="cen">
                  ఉగ్రం వీరం మహావిష్ణుం <br />
                  జ్వలంతం సర్వతోముఖం <br />
                  నృసింహం భీషణం భద్రం <br />
                  మృత్యుమృత్యుం నమామ్యహం
                </p>
              </div>
              <div>
                <p>
                  పైన తెలుపబడింది నృశింహ మంత్రం. ఇందులో వున్న ఒక్కొక్క నామం నృశింహుని ఒక్కో తత్త్వాన్ని తెలియజేస్తుంది.
                  ఉగ్రం
                  అంటే... నృశింహుడు ఉగ్రమూర్తి. నరసింహుని హుంకారాన్ని విన్నంత మాత్రంలోనే అంతర్గత, బహిర్గత శత్రునాశనం
                  జరుగుతుంది. వీరం అంటే.. సకల కార్యకారణాలకు మూలంగా వున్న శక్తినే వీరం అంటారు. నరసింహుడు వీరమూర్తి. కనుక
                  సకల
                  కార్యకారణ స్వరూపుడు ఆయనే. మహావిష్ణుం అంటే... అన్ని లోకాల్లో అంతటా వుండే నరసింహ తత్వానికి ఈ నామం ప్రతీక.
                  సకల
                  జీవరాశులన్నిటిలోనూ తానే వ్యక్తంగానూ, అవ్యక్తంగానూ పరమాత్మ భాసిస్తాడు. జ్వలంతం అంటే...
                  సకల లోకాల్లో, సర్వాత్మల్లో తన తేజస్సును ప్రకాశింపజేయడం ద్వారా వాటి ప్రకాశానికి కారణమైన తత్త్వమే జ్వలంత
                  శబ్దానికి అర్థం.
                </p>
                <p>
                  సర్వతోముఖం అంటే... ఇంద్రియ సహాయం లేకుండా సకల విశ్వాన్ని చూడగల పరమాత్మ తత్త్వమే సర్వతోముఖత్వం. నృసింహం
                  అంటే.. సకల జీవుల్లో సింహం చాలా శ్రేష్ఠమైనది. అందుకనే పరమాత్మ లోకాలను ఉద్ధరించడానికి శ్రేష్టమైన సింహాకృతి
                  ప్రధానంగా నరసింహుడుగా ఆవిర్భవించాడు. భీషణం అంటే... నరసింహుని శాసనశక్తి ప్రతీక భీషణత్వం.
                </p>
                <p>
                  అత్యంత భయంకరమైన రూపం ఇది. భద్రం అంటే.. భయాన్ని కలిగించే భీషణుడైన పరమాత్మే ఆ భయాన్ని పోగొట్టి అభయాన్ని
                  కూడా
                  ఇస్తాడు. ఇదే భద్రత్వం. మృత్యుమృత్యుం అంటే.. స్మరణ మాత్రం చేత అప మృత్యువును దూరం చేసేవాడు. మృత్యువుకే
                  మృత్యువైన వాడు నరసింహుడు మాత్రమే. మృత్యువును కలిగించేదీ, మృత్యువును తొలగించేది కూడా ఆ స్వామి అనుగ్రహమే.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>

  </div>
</template>

<script scoped>
export default {
  name: "TempleHome",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
<style>
.sklom {
  height: 100%;
}

.test {
  background: url(../assets/bg1.avif?) !important;
  background-position: top left !important;
  background-repeat: no-repeat !important;
}

.para {
  display: flex;
  text-align: justify;
}

.cen {
  text-align: center;
}

.car-slide {
  height: 80vh;
}

.img-fluid {
  object-fit: cover;
  height: 100%;
}</style>
