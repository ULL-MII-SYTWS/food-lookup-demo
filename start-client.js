// Run 'cd client && npm start' in a way that is independent of the OS 
const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'client', shell: true };
require('child_process').spawn('npm', args, opts);
