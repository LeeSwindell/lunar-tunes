package com.lunartunes.backend;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@GetMapping("/play")
	public String Play() {
		Map<Integer, String> randSong = new HashMap<>();
		randSong.put(0, "clair de lune");
		randSong.put(1, "harvest moon");
		randSong.put(2, "yellow moon");

		// Random random = new Random();
		// int num = random.nextInt(3);

		return randSong.get(0);
	}

}
