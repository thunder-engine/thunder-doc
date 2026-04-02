.. _api_Log:

Log
===

Inherited: None

.. _api_Log_description:

Description
-----------

The Log is used whenever the developer needs to write out debugging or tracing information to a file or console.

Common usecase:

::

    Log(Log::ERR) << "Loading level:" << 1;



.. _api_Log_public:

Public Methods
--------------

+------------------------+--------------------------------------------------------------+
|                        | :ref:`Log<api_Log_0d19f7ba>` (Log::LogTypes  type)           |
+------------------------+--------------------------------------------------------------+
|                        | :ref:`~Log<api_Log_27c935d8>` ()                             |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_1e3ad29f>` (bool  b)                |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_7a2df4b8>` (char  c)                |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_03271b59>` (const TString & string) |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_14a67bd9>` (const char * string)    |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_485613e7>` (const void * value)     |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_b1375409>` (double  d)              |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_7a83b02f>` (float  f)               |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_d385e92b>` (int  i)                 |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_1703f84a>` (long long  i)           |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_2c1b93a4>` (short  s)               |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_9a35f76e>` (unsigned char  c)       |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_08736219>` (unsigned int  i)        |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_f04726b3>` (unsigned long long  i)  |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_b047d82c>` (unsigned short  s)      |
+------------------------+--------------------------------------------------------------+

.. _api_Log_enums:

Public Enums
------------

.. _api_Log_LogTypes:

**enum Log::LogTypes**

This enum defines the lavel of logging.

+----------+-------+-------------------------------------------------------+
| Constant | Value | Description                                           |
+----------+-------+-------------------------------------------------------+
| Log::CRT | 0     | Critical logging. For use with critical failures.     |
+----------+-------+-------------------------------------------------------+
| Log::ERR | 1     | Error logging. For use with unrecoverable failures.   |
+----------+-------+-------------------------------------------------------+
| Log::WRN | 2     | Warning logging. For use with recoverable failures.   |
+----------+-------+-------------------------------------------------------+
| Log::INF | 3     | Informational logging. Should be desabled in release. |
+----------+-------+-------------------------------------------------------+
| Log::DBG | 4     | Debug logging. Should be desabled in release.         |
+----------+-------+-------------------------------------------------------+



.. _api_Log_static:

Static Methods
--------------

+-------+-------------------------------------------------------------+
|  void | :ref:`addHandler<api_Log_6f783d2a>` (LogHandler * handler)  |
+-------+-------------------------------------------------------------+
|  void | :ref:`setLogLevel<api_Log_7193bce8>` (Log::LogTypes  level) |
+-------+-------------------------------------------------------------+

.. _api_Log_methods:

Methods Description
-------------------

.. _api_Log_0d19f7ba:

**Log::Log** (:ref:`Log::LogTypes<api_Log_LogTypes>`  *type*)

Constructs a log stream that writes to the handler for the message type.

----

.. _api_Log_27c935d8:

**Log::~Log** ()

Flushes any pending data to be written and destroys the log stream.

----

.. _api_Log_6f783d2a:

 void **Log::addHandler** (:ref:`LogHandler<api_LogHandler>` * *handler*)

Adds a new Log handler. This method can be used in case if a developer would need to move logging stream to someplace. For example to the console.

----

.. _api_Log_7193bce8:

 void **Log::setLogLevel** (:ref:`Log::LogTypes<api_Log_LogTypes>`  *level*)

Set current log *level* output. Messages wich are below this *level* will be descarded.

----

.. _api_Log_1e3ad29f:

 :ref:`Log<api_Log>` & **Log::operator<<** (bool  *b*)

Writes the boolean value, b, to the stream and returns a reference to the stream.

.. _api_Log_7a2df4b8:

 :ref:`Log<api_Log>` & **Log::operator<<** (char  *c*)

Writes the singed 8 bit integer value, c, to the stream and returns a reference to the stream.

.. _api_Log_03271b59:

 :ref:`Log<api_Log>` & **Log::operator<<** (:ref:`TString<api_TString>` & *string*)

Writes the text string, to the stream and returns a reference to the stream.

.. _api_Log_14a67bd9:

 :ref:`Log<api_Log>` & **Log::operator<<** (char * *string*)

Writes the '\0'-terminated string, to the stream and returns a reference to the stream.

.. _api_Log_485613e7:

 :ref:`Log<api_Log>` & **Log::operator<<** (void * *value*)

Writes the pointer value, to the stream and returns a reference to the stream.

.. _api_Log_b1375409:

 :ref:`Log<api_Log>` & **Log::operator<<** (double  *d*)

Writes the float value with double precision, d, to the stream and returns a reference to the stream.

.. _api_Log_7a83b02f:

 :ref:`Log<api_Log>` & **Log::operator<<** (float  *f*)

Writes the float value, f, to the stream and returns a reference to the stream.

.. _api_Log_d385e92b:

 :ref:`Log<api_Log>` & **Log::operator<<** (int  *i*)

Writes the singed 32 bit integer value, i, to the stream and returns a reference to the stream.

.. _api_Log_1703f84a:

 :ref:`Log<api_Log>` & **Log::operator<<** (long  *i*)

Writes the singed 64 bit integer value, i, to the stream and returns a reference to the stream.

.. _api_Log_2c1b93a4:

 :ref:`Log<api_Log>` & **Log::operator<<** (short  *s*)

Writes the singed 16 bit integer value, s, to the stream and returns a reference to the stream.

.. _api_Log_9a35f76e:

 :ref:`Log<api_Log>` & **Log::operator<<** (char  *c*)

Writes the unsinged 8 bit integer value, c, to the stream and returns a reference to the stream.

.. _api_Log_08736219:

 :ref:`Log<api_Log>` & **Log::operator<<** (int  *i*)

Writes the unsinged 32 bit integer value, i, to the stream and returns a reference to the stream.

.. _api_Log_f04726b3:

 :ref:`Log<api_Log>` & **Log::operator<<** (long  *i*)

Writes the unsinged 64 bit integer value, i, to the stream and returns a reference to the stream.

.. _api_Log_b047d82c:

 :ref:`Log<api_Log>` & **Log::operator<<** (short  *s*)

Writes the unsinged 16 bit integer value, s, to the stream and returns a reference to the stream.


