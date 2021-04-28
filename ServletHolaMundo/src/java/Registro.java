/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//se encarga de realizar la conexion con la base de datos
import java.sql.Connection;
import java.sql.DriverManager;

//realiza las sentencias sql, create, insert, delete, drop, update
import java.sql.Statement;

//de poder realizar las consultas a la bd
import java.sql.ResultSet;
import javax.servlet.ServletConfig;

/**
 *
 * @author maylo
 */
public class Registro extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request peticiones por parte del cliente
     * @param response servlet response respuestas por parte del servidor
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    
    /*
    El servlet para poderse conectar con la bd es necesario inicializar sus elementos
    voy a necesitar de 3 objetos que viene de la clases sql
    */
    
    private Connection con;
    private Statement set;
    private ResultSet rs;
    
    //vamos a crear el metodo constructor
    public void init(ServletConfig cfg) throws ServletException{
        //para conectar con la bd
        String url = "jdbc:mysql:3306//localhost/registro";
                //driver:gestorbd:puerto//IP//nombrebd
                
        String userName = "root";
        String password = "woozifer1010";
        
        try{
            Class.forName("com.mysql.jdbc.driver");
            //a veces el driver ya maneja por defecto el puerto de comunicacion
            //es por ello, que puede mandar un error, en ese caso "jdbc:mysql://localhost/registro";
            
            url = "jdbc:mysql://localhost/registro";
            con = DriverManager.getConnection(url, userName, password);
            set = con.createStatement();
            
            System.out.println("Se ha conectado a la BD");
            
        }catch(Exception e) {
            System.out.println("No se ha conectado a la BD");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());
            
        }
    }
    
    
    
    
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            
            //manipular los datos del formulario
            String nom, appat,appmat, correo, ip, iph;
            int edad, puerto, puertoh;
            
            ip = request.getLocalAddr();
            puerto = request.getLocalPort();
            
            
            
            iph =request.getRemoteAddr();
            puertoh = request.getRemotePort();
            
            nom = request.getParameter("nombre");
            appat = request.getParameter("appat");
            appmat = request.getParameter("appmat");
            correo = request.getParameter("email");
            
            edad = Integer.parseInt(request.getParameter("edad"));
            
            
            try{
               
                //query para poder insertar los datos en la bd
                /*
                insert into nombre de la tabla(atributo, atributo, ...)
                values("valor1", 'valor2', valor3 ...)
                -> "" son cadenas
                -> '' o sin comillas son numéricos
                */
                
                String q = "insert into Mregistro"
                        + "(nom_usu, appat_usu, appmat_usu, edad_usu, email_usu)"
                        + "values ('"+nom+"', '"+appat+"', '"+appmat+"', "+edad+", '"+correo+"')";
                        
                        set.executeUpdate(q);
            
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Registro de usuarios</title>");            
            out.println("</head>");
            out.println("<body>"
                    + "<br>Tu nombre es: " + nom);
            out.println("<br>"
                    + "Tu apellido paterno es: " + appat
                    + "<br>"
                    + "Tu Apellido Materno es: " + appmat
                    + "<br>"
                    + "Tu edad es: " + edad
                    + "<br>"
                    + "Tu correo electrónico es: " + correo
                    + "<br>");
            out.println("<h1>Registro exitoso</h1>"
                    + "<br>"
                    + "La IP local es: " + ip
                    + "<br>"
                    + "La IP del host: " + iph
                    + "<br>"
                    + "Puerto Local:" + puerto
                    + "<br>"
                    + "Puerto del Host: " + puertoh
                    + "<br>"
                    + "<a href='index.html'>Regresar al formulario</a>");
            out.println("</body>");
            out.println("</html>");
            
                System.out.println("Datos registrados en la tabla");
            
            }catch(Exception e){
                
                System.out.println("No se registraron los datos en la tabla");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
                out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Registro de usuarios</title>");            
            out.println("</head>");
            out.println("<body>"
                    + "<h1>No se pudo registrar, hubo un error</h1>"
            + "<a href='index.html'>Regresar al formulario</a>");
            out.println("</body>");
            out.println("</html>");
                
            }
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
