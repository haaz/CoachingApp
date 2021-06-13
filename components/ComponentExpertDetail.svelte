<script>
    export let expert = [];
</script>

<h5 class="card-title">{expert.fullname}</h5>
<h6 class="card-subtitle mb-2 text-muted">Skill: {expert.skill}</h6>
<p class="card-text">{expert.about}</p>
<a href={"mailto:" + expert.email} class="card-link">{expert.email}</a>
<br>
<a href={"tel:" + expert.phone}  class="card-link">{expert.phone}</a>