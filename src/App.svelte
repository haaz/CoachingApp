<script>
	import Router from "svelte-spa-router";
	import routes from "./routes";


</script>

<!-- This part is always displayed -->

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	<div class="container-fluid">
		<a class="navbar-brand" href="#/"
			>ECE - Experience Coaching with Experts
		</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNavDropdown"
			aria-controls="navbarNavDropdown"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>

		<div class="collapse navbar-collapse" id="navbarNavDropdown">
			<ul class="navbar-nav ">
				<li class="nav-item">
					<a class="nav-link" href="#/home">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#/experts">Experts</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#/experiences">Experiences</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#/coachings">Coachings</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<div class="container mt-3">
	<!-- Here we load the page depending on the current URL -->
	<Router {routes} />
</div>

<style>
</style>
