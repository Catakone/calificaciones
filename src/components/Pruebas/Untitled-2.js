<tbody>
    {verAlumnos.map((alumno) => {    
        if (!idAlumno.has(alumno.userInfo._id)) {
            idAlumno.add(alumno.userInfo._id);
            return (
                <tr key={alumno.userInfo._id}>
                    <td>{alumno.userInfo.nombre}</td>
                    <td>{alumno.userInfo.correo}</td>
                    <td>
                        {alumno.calificaciones.map((calificacion) => {
                            if (!idCalificacion.has(calificacion.materInfo._id)) {
                                idCalificacion.add(calificacion.materInfo._id);
                                return (
                                    <td key={calificacion.materInfo._id}>
                                        {calificacion.calificacion}
                                    </td>
                                );
                            }
                            return null;
                        })}
                    </td>
                </tr>
            );
        }
        return null; 
    })}
</tbody>
