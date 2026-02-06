<template>
  <main>
    <div class="text">
      <h1>CVS</h1>
      <h5>Here I can drop my CVs and manage them for different job applications.</h5>
    </div>

    <div class="dropZone" @dragover.prevent @dragenter.prevent @drop.prevent="handleDrop">
      <h3>Drag & drop PDF here</h3>
      <h5 class="hint">PDF files are saved in localStorage</h5>
    </div>

    <div class="cvsContainer">
      <div v-for="(cv, index) in cvs" :key="index" class="cvCard" @click.prevent="openPdf(cv)">
        <img v-if="cv.preview" :src="cv.preview" class="preview" alt="PDF preview" />
        <h5 class="cvName">{{ cv.name }}</h5>
      </div>
    </div>
  </main>
</template>

<script>
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf'
import pdfWorker from 'pdfjs-dist/legacy/build/pdf.worker.entry'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker

export default {
  name: 'DragDrop',
  data() {
    return {
      cvs: []
    }
  },
  mounted() {
    const saved = localStorage.getItem('cvs')
    if (saved) {
      const cvsFromStorage = JSON.parse(saved)
      cvsFromStorage.forEach(async cv => {
        if (!cv.preview) {
          cv.preview = await this.generatePreview(cv.base64)
        }
      })
      this.cvs = cvsFromStorage
    }
  },
  methods: {
    async handleDrop(event) {
      const files = event.dataTransfer.files
      for (let file of files) {
        if (file.type !== 'application/pdf') {
          alert('Only PDF files allowed')
          return
        }
        const reader = new FileReader()
        reader.onload = async () => {
          const base64 = reader.result
          const preview = await this.generatePreview(base64)
          const cv = { name: file.name, base64, preview }
          this.cvs.push(cv)
          this.saveToLocalStorage()
        }
        reader.readAsDataURL(file)
      }
    },
    saveToLocalStorage() {
      localStorage.setItem('cvs', JSON.stringify(this.cvs))
    },
    async generatePreview(base64Pdf) {
      const pdfData = atob(base64Pdf.split(',')[1])
      const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise
      const page = await pdf.getPage(1)
      const scale = 1
      const viewport = page.getViewport({ scale })
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      canvas.width = viewport.width
      canvas.height = viewport.height
      await page.render({ canvasContext: context, viewport }).promise
      return canvas.toDataURL('image/png')
    },
    openPdf(cv) {
      const base64 = cv.base64.split(',')[1]
      const byteCharacters = atob(base64)
      const byteNumbers = new Array(byteCharacters.length)
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i)
      }
      const byteArray = new Uint8Array(byteNumbers)
      const blob = new Blob([byteArray], { type: 'application/pdf' })
      const blobUrl = URL.createObjectURL(blob)
      window.open(blobUrl)
    }
  }
}
</script>

<style scoped>
main {
  width: 80%;
  min-height: 90vh;
  padding-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 2rem;
}

.text {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.dropZone {
  width: 80%;
  height: 200px;
  border: 2px dashed #999;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
}

.dropZone:hover {
  border-color: #99999998;
}

.hint {
  opacity: 0.6;
}

.cvsContainer {
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.cvCard {
  border: 1px solid #dddddd4b;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 0.6rem;
}

.preview {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
}

.openLink {
  color: #abcdff;
  text-decoration: none;
}

.openLink:hover {
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .cvsContainer {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .cvsContainer {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
