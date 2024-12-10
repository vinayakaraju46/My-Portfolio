<template>
	<div class="page-wrapper">
		<div class="title">Posts</div>
		<div class="posts-wrapper">
			<div class="post" v-for="(project, index) in posts" :key="index">
				<div class="post-title">
					<a :href="project.link" target="_blank"> {{ project.title }} </a>
					<!-- <div class="reviews" v-if="project?.is_git_repo">
						{{ getRepoInfo(project) ? project?.stargazers_count : "" }}
					</div> -->
					<div class="post-tags">
						<span v-for="tag in project.tags" :key="tag" class="post-tag">
							<a :href="tag.link" target="_blank" v-if="tag.type == 'REDDIT'">
								<img src="https://img.icons8.com/color/48/000000/reddit.png" height="30px" width="30px" />
							</a>
						</span>
					</div>
				</div>

				<div class="post-description">
					{{ project.description }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			posts: [
				{
					title: "ROS Docker Environment on macOS (Apple Silicon)",
					description:
						"This project sets up a Docker-based virtual environment to run ROS with support for Gazebo and V-REP/Virtual Robotics Experimentation Platform. The setup is tailored for macOS devices with Apple Silicon chips, using a Linux/amd64 base image to ensure compatibility.",
					link: "https://github.com/vinayakaraju46/ROS-for-Apple-Silicon",
					is_git_repo: true,
					repo_link: "https://api.github.com/repos/vinayakaraju46/ROS-for-Apple-Silicon",
					tags: [
						{
							type: "REDDIT",
							link: "https://www.reddit.com/r/robotics/comments/1h2vc23/run_ros_on_apple_silicon_practice_and_simulate_on/"
						}
					]
				},
				{
					title: "Accessing UI of Raspberry Pi on a browser",
					description: "A simple tweak to your Raspberry pi that makes your development simple",
					link: "https://github.com/vinayakaraju46/raspberrypinoVNC",
					is_git_repo: true,
					repo_link: "https://api.github.com/repos/vinayakaraju46/raspberrypinoVNC",
					tags: [
						{
							type: "REDDIT",
							link: "https://www.reddit.com/r/RASPBERRY_PI_PROJECTS/comments/11j5brx/access_raspberrypi_ui_from_browser_using_novnc/"
						}
					]
				},
				{
					title: "DIY Home Automation",
					description:
						"IOT platform that allows you to control your Home IOT devices. You need esp8266 and a relay module to get started",
					link: "https://github.com/ClyckIOT/clyckIOT"
				},
				{
					title: "User interface to control your RC Car",
					description:
						"A tkinter based UI to control your RC car. The controller script is written in few lines of python code",
					link: "https://github.com/vinayakaraju46/Python-Controlled-Bluetooth-car1"
				},
				{
					title: "PID controller for turtlesim bot",
					description: "C++ implementation of PID controller for turtlesim bot",
					link: "https://github.com/vinayakaraju46/turtlesim"
				},
				{
					title: "Ping Pong game",
					description:
						"Implementation of PingPong game from scratch using HTML, Javascript, NodeJs and socket.io. It's a two player game. Where a playerOne has to create a game and send the game code to playerTwo. playerTwo has to enter the game code and join the game. Game will only start when both players are joined",
					link: "https://github.com/vinayakaraju46/pingPong"
				},
				{
					title: "Some Data Structures and Algorithms solutions in C++",
					description: "A dump of C++ code that I wrote while learning DSA",
					link: "https://github.com/vinayakaraju46/cpp_DSA"
				},
				{
					title: "Ubi-partman failed with exit code 10 error while installing ubuntu",
					description:
						"I encountered an error while installing ubuntu on my machine which has nvidia graphic card. It is found that the error is due to the nvidia graphic drivers. The solution is to disable the nvidia graphic card in BIOS settings before installing ubuntu.",
					link: "https://github.com/vinayakaraju46/Ubi-partman-crashed-error"
				}
			]
		}
	},
	methods: {
		getRepoInfo(project) {
			const url = project?.repo_link

			// axios.get(url).then((response) => {
			// 	console.log(response.data);
			// })
			fetch(url)
				.then(response => response.json())
				.then(data => {
					console.log(data.stargazers_count)
					project.stargazers_count = data.stargazers_count
					return data.stargazers_count
				})
				.catch(error => {
					console.error("Error:", error)
				})
		}
	},
	mounted() {
		// this.getRepoInfo()
	}
}
</script>

<style lang="scss" scoped>
.page-wrapper {
	display: flex;
	flex-direction: column;
	gap: $gap;
	width: 100%;
	padding: calc($gap * 6);
	background-color: hsl(0, 0%, 10%);
	align-items: center;
	.title {
		font-size: 2rem;
		font-weight: 700;
		color: hsl(0, 0%, 90%);
	}
	.posts-wrapper {
		display: flex;
		flex-direction: column;
		gap: calc($gap * 2);
		width: 100%;
		.post {
			display: flex;
			flex-direction: column;
			gap: calc($gap * 2);
			padding: calc($gap * 2);
			background-color: hsl(0, 0%, 15%);
			border-radius: 4px;
			border: 1px solid hsl(0, 0%, 40%);
			.post-title {
				font-size: 1.5rem;
				font-weight: 700;
				display: flex;
				justify-content: space-between;
				a {
					text-decoration: none;
					color: hsl(229, 53%, 53%);
					&:hover {
						text-decoration: underline;
					}
				}

				.post-tags {
					.post-tag {
						display: flex;
						align-items: center;
						gap: calc($gap * 0.5);
						color: hsl(16.24deg 100% 50%);
						a {
							text-decoration: none;
							color: hsl(16.24deg 100% 50%);
							display: flex;
							justify-content: center;
							align-items: center;
							gap: 0.5rem;
							&:hover {
								text-decoration: underline;
							}
						}
					}
				}
			}
			.post-description {
				font-size: 1rem;
				font-weight: 400;
				color: hsl(0, 0%, 60%);
			}
		}
	}
}

@media (max-width: 768px) {
	.page-wrapper {
		padding: calc($gap * 0);
	}
}
</style>
