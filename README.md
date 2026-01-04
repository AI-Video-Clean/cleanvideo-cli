# CleanVideo CLI

Command line wrapper for **CleanVideoAI** - Free AI Video Watermark Remover.

A lightweight CLI tool that provides quick access to the web-based video processing service. All AI processing happens locally in your browser - 100% privacy protected!

## Installation

### Global Installation

```bash
npm install -g cleanvideo
```

### Use with npx (no installation required)

```bash
npx cleanvideo [input] [output]
```

### Development / Local Testing

If you want to test from source code:

```bash
# Clone or download the repository
cd cleanvideo-cli

# Install dependencies
npm install

# Run directly
node bin/cleanvideo.js --help
node bin/cleanvideo.js video.mp4

# Or create a local link
npm link
cleanvideo --help
```

## Usage

### Basic Usage

```bash
# Open CleanVideoAI homepage
cleanvideo

# Process a local video file
cleanvideo video.mp4

# Process a remote video URL
cleanvideo https://example.com/video.mp4

# Specify output filename (optional, for reference)
cleanvideo input.mp4 output.mp4
cleanvideo input.mp4 -o output.mp4
```

### Command Options

- `-h, --help` - Show help information
- `-v, --version` - Show version number
- `-o, --output <file>` - Specify output file name (optional)

### Examples

```bash
# Process local video
cleanvideo my-video.mp4

# Process remote video URL
cleanvideo https://example.com/video.mp4

# With output filename
cleanvideo input.mp4 cleaned.mp4
cleanvideo input.mp4 -o cleaned.mp4
```

## How It Works

1. **Local Files**: Opens the CleanVideoAI website where you can upload and process your video
2. **Remote URLs**: Opens the website with the video URL pre-loaded (if supported)
3. **All Processing**: Happens locally in your browser - your videos never leave your device!

## Privacy & Security

🔒 **100% Privacy Protected**
- All video processing happens locally in your browser
- Your videos never leave your device
- No data is sent to any server
- Perfect for sensitive content

## More Information

For advanced features, web interface, and more video processing tools, visit:

**🌐 [https://videowatermarkremove.com/](https://videowatermarkremove.com/)**

CleanVideoAI provides:
- ✅ AI-powered watermark removal
- ✅ Web-based video processing (no installation required)
- ✅ 100% local processing - privacy guaranteed
- ✅ Support for various video formats
- ✅ Free to use

## Use Cases

- **Batch Processing**: Integrate into scripts and workflows
- **Quick Access**: Fast command-line entry to web-based processing
- **Automation**: Use in CI/CD pipelines or automation scripts
- **Developer Tools**: Easy integration with other tools

## License

MIT
