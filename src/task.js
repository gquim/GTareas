export function Tarea(descripcionTask){
    this.descripcion = descripcionTask;
    this.completado = false;
}

Tarea.prototype.tareaCompletada = function(){
    this.completado = !this.completado;
}
