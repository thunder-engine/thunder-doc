.. _api_File:

File
====

Inherited: None

.. _api_File_description:

Description
-----------

The File class provides an interface for reading from and writing to files. File expects the file separator to be '/' regardless of operating system. The use of other separators (e.g., '') is not supported.

You can check for a file's existence using exists(), and remove a file using delete(). You can create a directory using mkdir(), list all files in directory using flist() and retrive other basic information.

The file can be opened with open() and closed with fclose(). Data is usually can be read with fread() and written with fwrite().

Common usecase:

::

    File *file = Engine::file();
    _FILE *fp = file->fopen("filename", "r");
    if(fp) {
        ByteArray data;
        data.resize(file->fsize(fp));
        file->fread(&data[0], data.size(), 1, fp);
        file->fclose(fp);
    }



.. _api_File_public:

Public Methods
--------------

+------------------------------------+--------------------------------------------------------------------------------------------------+
|                               bool | :ref:`exists<api_File_exists>` (const char * path)                                               |
+------------------------------------+--------------------------------------------------------------------------------------------------+
|                                int | :ref:`fclose<api_File_fclose>` (_FILE * stream)                                                  |
+------------------------------------+--------------------------------------------------------------------------------------------------+
|                               bool | :ref:`fdelete<api_File_fdelete>` (const char * path)                                             |
+------------------------------------+--------------------------------------------------------------------------------------------------+
|                               void | :ref:`finit<api_File_finit>` (const char * argv0)                                                |
+------------------------------------+--------------------------------------------------------------------------------------------------+
|  :ref:`StringList<api_StringList>` | :ref:`flist<api_File_flist>` (const char * path)                                                 |
+------------------------------------+--------------------------------------------------------------------------------------------------+
|          :ref:`_FILE<api__FILE>` * | :ref:`fopen<api_File_fopen>` (const char * path, const char * mode)                              |
+------------------------------------+--------------------------------------------------------------------------------------------------+
|                            _size_t | :ref:`fread<api_File_fread>` (void * ptr, _size_t  size, _size_t  count, _FILE * stream)         |
+------------------------------------+--------------------------------------------------------------------------------------------------+
|                               void | :ref:`fsearchPathAdd<api_File_fsearchPathAdd>` (const char * path, bool  isFirst = false)        |
+------------------------------------+--------------------------------------------------------------------------------------------------+
|                            _size_t | :ref:`fseek<api_File_fseek>` (_FILE * stream, uint64_t  origin)                                  |
+------------------------------------+--------------------------------------------------------------------------------------------------+
|                            _size_t | :ref:`fsize<api_File_fsize>` (_FILE * stream)                                                    |
+------------------------------------+--------------------------------------------------------------------------------------------------+
|                            _size_t | :ref:`ftell<api_File_ftell>` (_FILE * stream)                                                    |
+------------------------------------+--------------------------------------------------------------------------------------------------+
|                            _size_t | :ref:`fwrite<api_File_fwrite>` (const void * ptr, _size_t  size, _size_t  count, _FILE * stream) |
+------------------------------------+--------------------------------------------------------------------------------------------------+
|                               bool | :ref:`isdir<api_File_isdir>` (const char * path)                                                 |
+------------------------------------+--------------------------------------------------------------------------------------------------+
|                               bool | :ref:`mkdir<api_File_mkdir>` (const char * path)                                                 |
+------------------------------------+--------------------------------------------------------------------------------------------------+



.. _api_File_static:

Static Methods
--------------

None

.. _api_File_methods:

Methods Description
-------------------

.. _api_File_exists:

 bool **File::exists** (char * *path*)

Checks if a file by *path* exists. Returns true if operation succeeded; otherwise returns false.

----

.. _api_File_fclose:

 int **File::fclose** (:ref:`_FILE<api__FILE>` * *stream*)

Closes file *stream*. Returns 0 if succeeded; otherwise returns non-zero value.

----

.. _api_File_fdelete:

 bool **File::fdelete** (char * *path*)

Delete file. Returns true if the operation succeeded; otherwise returns false.


**Note:** The file can be deleted only if *path* marked as writable.


----

.. _api_File_finit:

 void **File::finit** (char * *argv0*)

Initialize the file system module at *argv0* application file path. This method must be called before any operations with filesytem.


**Note:** Usually, this method calls internally and must not be called manually.


----

.. _api_File_flist:

 :ref:`StringList<api_StringList>`  **File::flist** (char * *path*)

Get a file listing of a search *path* directory.

::

    StringList rc = file->_flist("savegames");
    
    for(auto it : rc) {
        printf("Found - [%s].\n", it.c_str());
    }

----

.. _api_File_fopen:

 :ref:`_FILE<api__FILE>` * **File::fopen** (char * *path*, char * *mode*)

Opens the file whose name is specified in the *path* and associates it with a stream that can be identified in future operations. The operations that are allowed on the stream and how these are performed are defined by the *mode* parameter. Allowed values of *mode* parameter:


"r" - Open a file for reading.
"w" - Open a file for writing. The *path* must marked as writable.
"a" - Open a file for appending. The *path* must marked as writable.


Returns _FILE pointer to file stream if succeeded; otherwise returns nullptr value.

----

.. _api_File_fread:

 _size_t **File::fread** (void * *ptr*, _size_t  *size*, _size_t  *count*, :ref:`_FILE<api__FILE>` * *stream*)

Reads an array of *count* elements, each one with a *size* of *size* bytes, from the *stream* and stores them in the block of memory specified by *ptr*. The file must be opened for reading.

Returns number of objects read.

----

.. _api_File_fsearchPathAdd:

 void **File::fsearchPathAdd** (char * *path*, bool  *isFirst* = false)

Add an archive or directory to the search *path*. If *isFirst* provided as true the directory will be marked as writable. The Method can be called multiple time to add more directories to work with.


**Note:** Usually, this method calls internally and must not be called manually.


----

.. _api_File_fseek:

 _size_t **File::fseek** (:ref:`_FILE<api__FILE>` * *stream*, :ref:`uint64_t<api_uint64_t>`  *origin*)

Seek to a new position within a file *stream*. Returns 0 if succeeded; otherwise returns non-zero value. The next read or write will occur at that *origin* position. Seeking past the beginning or end of the file is not allowed, and causes an error.

**See also** ftell().

----

.. _api_File_fsize:

 _size_t **File::fsize** (:ref:`_FILE<api__FILE>` * *stream*)

Get total length of a file *stream* in bytes.

----

.. _api_File_ftell:

 _size_t **File::ftell** (:ref:`_FILE<api__FILE>` * *stream*)

Determine current position within a file *stream*.

Returns offset in bytes from start of file.

----

.. _api_File_fwrite:

 _size_t **File::fwrite** (void * *ptr*, _size_t  *size*, _size_t  *count*, :ref:`_FILE<api__FILE>` * *stream*)

Writes an array of *count* elements, each one with a *size* of *size* bytes, from the block of memory pointed by *ptr* to the current position in the *stream*. The file must be opened for writing.

Returns number of objects written.

----

.. _api_File_isdir:

 bool **File::isdir** (char * *path*)

Determine if a file by *path* in the search *path* is really a directory.

Returns true if operation succeeded; otherwise returns false.

----

.. _api_File_mkdir:

 bool **File::mkdir** (char * *path*)

Create directory. Returns true if the operation succeeded; otherwise returns false.


**Note:** Directory can be created only if *path* marked as writable.



