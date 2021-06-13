
<script>
        export let expert = {
        fullname: "",
        skill: "",
        about: "",
        email: "",
        phone: "",
    };

</script>



    <div class="col-md-6">
        <label for="" class="form-label">Full Name</label>
        <input type="text" class="form-control" bind:value={expert.fullname} />
    </div>
    <div class="col-md-6">
        <label for="" class="form-label">Skill</label>
        <input type="text" class="form-control" bind:value={expert.skill} />
    </div>
    <div class="col-md-6">
        <label for="" class="form-label">Email</label>
        <input type="email" class="form-control" bind:value={expert.email} />
    </div>
    <div class="col-md-6">
        <label for="" class="form-label">Phone no.</label>
        <input type="text" class="form-control" bind:value={expert.phone} />
    </div>
    <div class="col-12">
        <label for="" class="form-label">About</label>
        <textarea
            type="text"
            class="form-control"
            bind:value={expert.about}
            placeholder="Tell us about the Expert"
            rows="3"
        />
    </div>

