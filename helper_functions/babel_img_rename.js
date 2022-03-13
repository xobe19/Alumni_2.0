export default function f(s) {
    return s.replace('.jpg', '').replace('.png', '').replace('.jpeg', '').replace('/', '').replace('.jfif', '').replace('.', '');
}