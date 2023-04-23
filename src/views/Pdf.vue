<template>
  <v-container
    class="container py-16"
  >
    <h1>Infrastructure report for {{ companyName }}</h1>
    <article v-for="(item,idx) in problems" :key="idx" class="py-6" :id="item.title">
      <h2>{{ item.title }} (<span :class="color[item.risk as string]">{{ item.risk.toUpperCase() }}</span>)</h2>
      <p><strong>Explanation:</strong> {{ item.explanation }}</p>
      <p><strong>Solution:</strong> {{ item.solution }}</p>
    </article>
  <br>
  <h3> Need help? We're here for you! </h3><br>
  <v-btn>Contact us</v-btn>
  </v-container>

</template>


<script setup lang="ts">

const companyName = "Example corporation"

const color: Record<string, string> = {
  medium: "red",
  low: "yellow"
}

const problems = [
  {
    title: "Content Security Policy (CSP) Header Not Set",
    explanation: "Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.",
    solution: "Ensure that your web server, application server, load balancer, etc. is configured to set the Content-Security-Policy header.",
    risk: "medium"
  },
  {
    title: "Missing Anti-clickjacking Header",
    explanation: "The response does not include either Content-Security-Policy with 'frame-ancestors' directive or X-Frame-Options to protect against 'ClickJacking' attacks.",
    solution: "Modern Web browsers support the Content-Security-Policy and X-Frame-Options HTTP headers. Ensure one of them is set on all web pages returned by your site/app. \n If you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY. Alternatively consider implementing Content Security Policy's \"frame-ancestors\" directive.",
    risk: "medium"
  }
  ,
  {
    title: "Server Leaks Version Information via \"Server\" HTTP Response Header Field",
    explanation: "The web/application server is leaking version information via the \"Server\" HTTP response header. Access to such information may facilitate attackers identifying other vulnerabilities your web/application server is subject to.",
    solution: "Ensure that your web server, application server, load balancer, etc. is configured to suppress the \"Server\" header or provide generic details.",
    risk: "low"
  },

  {
    title: "X-Content-Type-Options Header Missing",
    explanation: "The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.",
    solution: "Ensure that the application/web server sets the Content-Type header appropriately, and that it sets the X-Content-Type-Options header to 'nosniff' for all web pages. \n If possible, ensure that the end user uses a standards-compliant and modern web browser that does not perform MIME-sniffing at all, or that can be directed by the web application/web server to not perform MIME-sniffing.",
    risk: "low"
  }
]


</script>

<style scoped>
.container {
  /* A4 paper width */
  max-width: 21cm;
  /*padding: 1.5rem;*/
}
.red {
  color: red !important;
}
.yellow {
  color: orange !important;
}
</style>
