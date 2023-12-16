<template>
  <main class="mt-4">
    <div class="container">
      <!--Section: Content-->
      <section class="mb-5">
        <h4 class="mb-4 text-center">
          <strong>Message Us</strong>
        </h4>

        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            <form>
              <!-- 2 column grid layout with text inputs for the first and last names -->
              <div class="row mb-3">
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label" for="form3Example1"
                      >First name</label
                    >
                    <input
                      type="text"
                      id="form3Example1"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label" for="form3Example2"
                      >Last name</label
                    >
                    <input
                      type="text"
                      id="form3Example2"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>

              <!-- Email input -->
              <div class="form-outline mb-3">
                <label class="form-label" for="form3Example3"
                  >Email address</label
                >
                <input type="email" id="form3Example3" class="form-control" />
              </div>

              <!-- Password input -->
              <div class="form-outline mb-3">
                <label class="form-label" for="form3Example4"
                  >Phone Number</label
                >
                <input
                  type="phoneNumber"
                  id="form3Example4"
                  class="form-control"
                />
              </div>
              <div class="form-outline mb-3">
                <label class="form-label" for="form3Example4">Address</label>
                <textarea type="address" class="input-area form-control">
                </textarea>
              </div>
              <div class="form-outline mb-3">
                <label class="form-label" for="form3Example4">Subject</label>
                <input type="subject" id="form3Example4" class="form-control" />
              </div>
              <div class="form-outline mb-3">
                <label class="form-label" for="form3Example4">Message</label>
                <textarea type="message" class="input-area form-control">
                </textarea>
              </div>
              <!-- Checkbox -->

              <!-- Submit button -->
              <button type="submit" class="btn btn-primary btn-block mb-3">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
      <hr class="my-5" />
      <section>
        <div class="contactscard">
          <b-card-group deck>
            <b-card
              border-variant="primary"
              header="Contact Us"
              header-bg-variant="primary"
              header-text-variant="white"
              align="center"
            >
              <b-card-text>
                1A Kambula Street <br />
                Windsor Gardens,SA,5087 <br />
                Phone: 0425753322 <br />
                Email: srilakshminarasimhatemple@gmail.com.</b-card-text
              >
            </b-card>
          </b-card-group>
        </div>
      </section>
      <hr class="my-5" />
      <!--Section: Content-->
    </div>
  </main>
</template>

<style scoped>
.contactscard {
  display: flex;
  justify-content: center;
}
textarea.form-control {
  height: 100px; /* Set the desired height */
  box-sizing: border-box; /* Include padding and border in the total height */
}
</style>
