#!/usr/bin/env node

/**
 * CleanVideo CLI - Command line wrapper for CleanVideoAI
 * Visit https://videowatermarkremove.com/ for more information
 */

const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const program = new Command();
const BASE_URL = 'https://videowatermarkremove.com';

program
  .name('cleanvideo')
  .description('CLI wrapper for CleanVideoAI - Free AI Video Watermark Remover')
  .version('1.0.0')
  .argument('[input]', 'Input video file path or URL')
  .argument('[output]', 'Output file name (optional, for reference only)')
  .option('-o, --output <file>', 'Output file name (alternative syntax)')
  .action(async (input, output, options) => {
    try {
      // 动态导入 open 模块（ES Module）
      const { default: open } = await import('open');
      
      // 确定输出文件名（优先使用 -o 选项，其次使用位置参数）
      const outputFile = options.output || output;

      if (!input) {
        // 没有输入，直接打开主页
        console.log('🌐 Opening CleanVideoAI in your browser...');
        console.log('📍 Visit: https://videowatermarkremove.com/');
        console.log('');
        console.log('💡 Tip: You can also specify a video file or URL:');
        console.log('   cleanvideo video.mp4');
        console.log('   cleanvideo https://example.com/video.mp4');
        await open(BASE_URL);
        return;
      }

      // 判断输入类型：URL 还是本地文件
      let isUrl = false;
      let targetUrl = BASE_URL;

      try {
        // 尝试解析为 URL
        new URL(input);
        isUrl = true;
      } catch (e) {
        // 不是有效的 URL，检查是否为本地文件
        const filePath = path.resolve(input);
        if (!fs.existsSync(filePath)) {
          console.error(`❌ Error: File not found: ${input}`);
          console.error('');
          console.error('💡 Tips:');
          console.error('   - Use absolute or relative file path for local files');
          console.error('   - Use full URL (http:// or https://) for remote videos');
          process.exit(1);
        }
      }

      // 构造处理链接
      if (isUrl) {
        // URL 输入：构造带参数的链接
        targetUrl = `${BASE_URL}/?video=${encodeURIComponent(input)}`;
        console.log('🌐 Opening CleanVideoAI with video URL...');
        console.log(`📍 Video URL: ${input}`);
      } else {
        // 本地文件：打开主页，提示用户上传
        console.log('🌐 Opening CleanVideoAI in your browser...');
        console.log(`📁 Local file: ${path.resolve(input)}`);
        console.log('');
        console.log('💡 Please upload the file manually in the browser.');
        console.log('   All processing happens locally in your browser - 100% privacy protected!');
      }

      if (outputFile) {
        console.log(`📝 Output file: ${outputFile}`);
      }

      console.log('');
      console.log('✨ All processing happens in your browser - 100% privacy protected!');
      console.log('🔒 Your videos never leave your device.');
      console.log('');

      // 打开浏览器
      await open(targetUrl);

      console.log('✅ Browser opened successfully!');
      console.log(`🌐 Visit: ${targetUrl}`);

    } catch (error) {
      console.error('❌ Error:', error.message);
      process.exit(1);
    }
  });

// 解析命令行参数
program.parse();
