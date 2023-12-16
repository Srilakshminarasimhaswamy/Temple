<template>
  <main class="mt-5">
    <div class="container">
      <!--Section: Content-->
      <section>
        <div class="row">
          <div class="about col-md-6 gx-5 mb-4">
            <div class="bg-image hover-overlay ripple shadow-2-strong" data-mdb-ripple-color="light">
              <img src="../assets/Om.jpg" class="img-fluid" />
              <a href="#!">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
              </a>
            </div>
          </div>

          <div class="col-md-6 gx-5 mb-4">
            <h4><strong>MISSION STATEMENT</strong></h4>
            <p class="para">
              Sri Lakshmi Narasimha Swamy Indian Cultural Society of Australia
              Incorporated Temple is establish to provide services and a place
              to the Hindu Community in and around Memphis for cultural,
              religious, spiritual, charitable, educational, and literary
              activities. These will be achieved by appointing Vedic priests who
              perform pujas and rituals in the temple to the installed deities
              according to Vaikhanasa and Karana Agama as defined by the Vedas
              and Upanishads. The priests will also fulfil the spiritual needs
              of the Hindu community by providing services through personal
              pujas and rituals both at home and at the Temple. The Cultural
              center will establish to provide a venue for the social and
              cultural activities of the local Hindu community, to provide a
              forum for religious discourses for better understanding of Hindu
              religion and philosophy, to educate the younger generation in
              developing their identity as Hindus, to promote art, music and
              languages, and to foster goodwill and understanding among all
              sections of Hindus and other religious organizations. The temple
              Management will accomplish the above mission in a vegetarian
              environment, free of alcohol, drugs, smoking and weapons.
            </p>
          </div>
        </div>
      </section>
      <hr class="my-5" />
      <section>
        <div class="contactscard">
          <b-card-group deck>
            <b-card title="Sandeep Tati" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top
              tag="article" style="max-width: 20rem" class="mb-2">
              <b-card-text> President </b-card-text>
            </b-card>
            <b-card title="Venkatesh Narayanan" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top
              tag="article" style="max-width: 20rem" class="mb-2">
              <b-card-text> Vice-President </b-card-text>
            </b-card>
            <b-card title="Name TBD" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top
              tag="article" style="max-width: 20rem" class="mb-2">
              <b-card-text> General Secretary </b-card-text>
            </b-card>
            <b-card title="Name TBD" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top
              tag="article" style="max-width: 20rem" class="mb-2">
              <b-card-text> Treasurer </b-card-text>
            </b-card>
          </b-card-group>
          <b-card-group deck>
            <b-card title="Name TBD" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top
              tag="article" style="max-width: 20rem" class="mb-2">
              <b-card-text> Public Relations Officer </b-card-text>
            </b-card>
            <b-card title="Name TBD" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top
              tag="article" style="max-width: 20rem" class="mb-2">
              <b-card-text> Cultural Secretary </b-card-text>
            </b-card>
            <b-card title="TBD Name" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top
              tag="article" style="max-width: 20rem" class="mb-2">
              <b-card-text> Temple Office Manager </b-card-text>
            </b-card>
            <b-card title="TBD Name" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top
              tag="article" style="max-width: 20rem" class="mb-2">
              <b-card-text> Communications </b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </section>
      <hr class="my-5" />
      <section>
        <div>
          <b-card-group deck>
            <b-card class="trusteecard" border-variant="info" header="General Trustee Information"
              header-bg-variant="info" header-text-variant="white" align="center">
              <b-card-text>The Management Committee of Lakshmi Narasimha Swamy Trust
                consists of 6 Trustees. All the Trustees are unpaid volunteers
                and many of the current Trustees have been active participants
                in the temple activities.</b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </section>
      <hr class="my-5" />
    </div>
  </main>
</template>

<style scoped>
.para {
  display: flex;
  text-align: justify;
}

.about {
  align-items: center;
  display: flex;
}

.img-fluid {
  object-fit: cover;
}
</style>
