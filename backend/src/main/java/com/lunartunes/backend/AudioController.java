package com.lunartunes.backend;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Arrays;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.http.HttpStatus;
import org.springframework.util.ResourceUtils;

@Controller
public class AudioController {
    @GetMapping(value = "/audio-stream", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
    public ResponseEntity<byte[]> streamBytes() throws IOException {
        File file = ResourceUtils.getFile("classpath:ClairDeLune.mp3");

        byte[] fileContent = Files.readAllBytes(file.toPath());
        int numBytes = fileContent.length;
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.parseMediaType("audio/mpeg"))
                .header("Accept-Ranges", "bytes")
                .body(Arrays.copyOfRange(fileContent, 0, numBytes));
    }
}
