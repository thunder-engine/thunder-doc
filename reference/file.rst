.. _api_File:
File Class
================

Inherited: None

.. _api_File_description:
Description
-----------

Basic file system I/O module.

The File class provides an interface for reading from and writing to files. File expects the file separator to be '/' regardless of operating system. The use of other separators (e.g., '') is not supported.

You can check for a file's existence using _exists(), and remove a file using _delete(). You can create a directory using _mkdir(), list all files in directory using _flist() and retrive other basic information.

The file can be opened with _open() and closed with _fclose(). Data is usually can be read with _fread() and written with _fwrite().

Common usecase:



.. _api_File_public:
Public Methods
--------------

+-----------------------------------+----------------------------------------------------------------------------------------------------+
|             :ref:`bool<api_bool>` | :ref:`_delete<api_File__delete>` (const char * path)                                               |
+-----------------------------------+----------------------------------------------------------------------------------------------------+
|             :ref:`bool<api_bool>` | :ref:`_exists<api_File__exists>` (const char * path)                                               |
+-----------------------------------+----------------------------------------------------------------------------------------------------+
|               :ref:`int<api_int>` | :ref:`_fclose<api_File__fclose>` (_FILE * stream)                                                  |
+-----------------------------------+----------------------------------------------------------------------------------------------------+
| :ref:`StringList<api_StringList>` | :ref:`_flist<api_File__flist>` (const char * path)                                                 |
+-----------------------------------+----------------------------------------------------------------------------------------------------+
|         :ref:`_FILE<api__FILE>` * | :ref:`_fopen<api_File__fopen>` (const char * path, const char * mode)                              |
+-----------------------------------+----------------------------------------------------------------------------------------------------+
|       :ref:`_size_t<api__size_t>` | :ref:`_fread<api_File__fread>` (void * ptr, _size_t  size, _size_t  count, _FILE * stream)         |
+-----------------------------------+----------------------------------------------------------------------------------------------------+
|       :ref:`_size_t<api__size_t>` | :ref:`_fseek<api_File__fseek>` (_FILE * stream, int  origin)                                       |
+-----------------------------------+----------------------------------------------------------------------------------------------------+
|       :ref:`_size_t<api__size_t>` | :ref:`_fsize<api_File__fsize>` (_FILE * stream)                                                    |
+-----------------------------------+----------------------------------------------------------------------------------------------------+
|       :ref:`_size_t<api__size_t>` | :ref:`_ftell<api_File__ftell>` (_FILE * stream)                                                    |
+-----------------------------------+----------------------------------------------------------------------------------------------------+
|       :ref:`_size_t<api__size_t>` | :ref:`_fwrite<api_File__fwrite>` (const void * ptr, _size_t  size, _size_t  count, _FILE * stream) |
+-----------------------------------+----------------------------------------------------------------------------------------------------+
|             :ref:`bool<api_bool>` | :ref:`_isdir<api_File__isdir>` (const char * path)                                                 |
+-----------------------------------+----------------------------------------------------------------------------------------------------+
|             :ref:`bool<api_bool>` | :ref:`_mkdir<api_File__mkdir>` (const char * path)                                                 |
+-----------------------------------+----------------------------------------------------------------------------------------------------+
|             :ref:`void<api_void>` | :ref:`finit<api_File_finit>` (const char * argv0)                                                  |
+-----------------------------------+----------------------------------------------------------------------------------------------------+
|             :ref:`void<api_void>` | :ref:`fsearchPathAdd<api_File_fsearchPathAdd>` (const char * path, bool  isFirst = false)          |
+-----------------------------------+----------------------------------------------------------------------------------------------------+

.. _api_File_static:
Static Methods
--------------

None

.. _api_File_methods:
Methods Description
-------------------

.. _api_File__delete:

:ref:`bool<api_bool>`  **File::_delete** (:ref:`char<api_char>` * *path*)

Delete file. Returns true if the operation succeeded; otherwise returns false.

**Note:** The file can be deleted only if *path* marked as writable.

----

.. _api_File__exists:

:ref:`bool<api_bool>`  **File::_exists** (:ref:`char<api_char>` * *path*)

Checks if a file by *path* exists. Returns true if operation succeeded; otherwise returns false.

----

.. _api_File__fclose:

:ref:`int<api_int>`  **File::_fclose** (:ref:`_FILE<api__FILE>` * *stream*)

Closes file *stream*. Returns 0 if succeeded; otherwise returns non-zero value.

----

.. _api_File__flist:

:ref:`StringList<api_StringList>`  **File::_flist** (:ref:`char<api_char>` * *path*)

Get a file listing of a search *path* directory.

::

    StringList rc = file->_flist("savegames");
    
    for(auto it : rc) {
        printf("Found - [%s].\n", it.c_str());
    }

----

.. _api_File__fopen:

:ref:`_FILE<api__FILE>` * **File::_fopen** (:ref:`char<api_char>` * *path*, :ref:`char<api_char>` * *mode*)

Opens the file whose name is specified in the *path* and associates it with a stream that can be identified in future operations. The operations that are allowed on the stream and how these are performed are defined by the *mode* parameter. Allowed values of *mode* parameter:


"r" - Open a file for reading.
"w" - Open a file for writing. The *path* must marked as writable.
"a" - Open a file for appending. The *path* must marked as writable.


Returns _FILE pointer to file stream if succeeded; otherwise returns nullptr value.

----

.. _api_File__fread:

:ref:`_size_t<api__size_t>`  **File::_fread** (:ref:`void<api_void>` * *ptr*, :ref:`_size_t<api__size_t>`  *size*, :ref:`_size_t<api__size_t>`  *count*, :ref:`_FILE<api__FILE>` * *stream*)

Reads an array of *count* elements, each one with a *size* of *size* bytes, from the *stream* and stores them in the block of memory specified by *ptr*. The file must be opened for reading.

Returns number of objects read.

----

.. _api_File__fseek:

:ref:`_size_t<api__size_t>`  **File::_fseek** (:ref:`_FILE<api__FILE>` * *stream*, :ref:`int<api_int>`  *origin*)

Seek to a new position within a file *stream*. Returns 0 if succeeded; otherwise returns non-zero value. The next read or write will occur at that *origin* position. Seeking past the beginning or end of the file is not allowed, and causes an error.

**See also** _ftell().

----

.. _api_File__fsize:

:ref:`_size_t<api__size_t>`  **File::_fsize** (:ref:`_FILE<api__FILE>` * *stream*)

Get total length of a file *stream* in bytes.

----

.. _api_File__ftell:

:ref:`_size_t<api__size_t>`  **File::_ftell** (:ref:`_FILE<api__FILE>` * *stream*)

Determine current position within a file *stream*.

Returns offset in bytes from start of file.

**See also** _fseek().

----

.. _api_File__fwrite:

:ref:`_size_t<api__size_t>`  **File::_fwrite** (:ref:`void<api_void>` * *ptr*, :ref:`_size_t<api__size_t>`  *size*, :ref:`_size_t<api__size_t>`  *count*, :ref:`_FILE<api__FILE>` * *stream*)

Writes an array of *count* elements, each one with a *size* of *size* bytes, from the block of memory pointed by *ptr* to the current position in the *stream*. The file must be opened for writing.

Returns number of objects written.

----

.. _api_File__isdir:

:ref:`bool<api_bool>`  **File::_isdir** (:ref:`char<api_char>` * *path*)

Determine if a file by *path* in the search *path* is really a directory.

Returns true if operation succeeded; otherwise returns false.

----

.. _api_File__mkdir:

:ref:`bool<api_bool>`  **File::_mkdir** (:ref:`char<api_char>` * *path*)

Create directory. Returns true if the operation succeeded; otherwise returns false.

**Note:** Directory can be created only if *path* marked as writable.

----

.. _api_File_finit:

:ref:`void<api_void>`  **File::finit** (:ref:`char<api_char>` * *argv0*)

Initialize the file system module at *argv0* application file path. This method must be called before any operations with filesytem.

**Note:** Usually, this method calls internally and must not be called manually.

----

.. _api_File_fsearchPathAdd:

:ref:`void<api_void>`  **File::fsearchPathAdd** (:ref:`char<api_char>` * *path*, :ref:`bool<api_bool>`  *isFirst* = false)

Add an archive or directory to the search *path*. If *isFirst* provided as true the directory will be marked as writable. The Method can be called multiple time to add more directories to work with.

**Note:** Usually, this method calls internally and must not be called manually.

----


