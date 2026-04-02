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

+------------------------+----------------------------------------------------------------+
|                        | :ref:`Log<api_Log_f18954e6>` (Log::LogTypes  type)             |
+------------------------+----------------------------------------------------------------+
|                        | :ref:`~Log<api_Log_9467ba2c>` ()                               |
+------------------------+----------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator\<\<<api_Log_19eac27f>` (bool  b)                |
+------------------------+----------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator\<\<<api_Log_bf79e2d0>` (char  c)                |
+------------------------+----------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator\<\<<api_Log_4073c615>` (const TString & string) |
+------------------------+----------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator\<\<<api_Log_23a9815b>` (const char * string)    |
+------------------------+----------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator\<\<<api_Log_de7a4c13>` (const void * value)     |
+------------------------+----------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator\<\<<api_Log_89275d6f>` (double  d)              |
+------------------------+----------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator\<\<<api_Log_6fe70835>` (float  f)               |
+------------------------+----------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator\<\<<api_Log_5c348ae7>` (int  i)                 |
+------------------------+----------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator\<\<<api_Log_9d07f2ce>` (long long  i)           |
+------------------------+----------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator\<\<<api_Log_de53760a>` (short  s)               |
+------------------------+----------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator\<\<<api_Log_a1df7ce6>` (unsigned char  c)       |
+------------------------+----------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator\<\<<api_Log_83791e64>` (unsigned int  i)        |
+------------------------+----------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator\<\<<api_Log_49635cfe>` (unsigned long long  i)  |
+------------------------+----------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator\<\<<api_Log_625fbd4e>` (unsigned short  s)      |
+------------------------+----------------------------------------------------------------+

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
|  void | :ref:`addHandler<api_Log_0218e963>` (LogHandler * handler)  |
+-------+-------------------------------------------------------------+
|  void | :ref:`setLogLevel<api_Log_b1356092>` (Log::LogTypes  level) |
+-------+-------------------------------------------------------------+

.. _api_Log_methods:

Methods Description
-------------------

.. _api_Log_f18954e6:

**Log::Log** (:ref:`Log::LogTypes<api_Log_LogTypes>`  *type*)

Constructs a log stream that writes to the handler for the message type.

----

.. _api_Log_9467ba2c:

**Log::~Log** ()

Flushes any pending data to be written and destroys the log stream.

----

.. _api_Log_0218e963:

 void **Log::addHandler** (:ref:`LogHandler<api_LogHandler>` * *handler*)

Adds a new Log handler. This method can be used in case if a developer would need to move logging stream to someplace. For example to the console.

----

.. _api_Log_b1356092:

 void **Log::setLogLevel** (:ref:`Log::LogTypes<api_Log_LogTypes>`  *level*)

Set current log *level* output. Messages wich are below this *level* will be descarded.

----

.. _api_Log_19eac27f:

 :ref:`Log<api_Log>` & **Log::operator<<** (bool  *b*)

Writes the boolean value, b, to the stream and returns a reference to the stream.

.. _api_Log_bf79e2d0:

 :ref:`Log<api_Log>` & **Log::operator<<** (char  *c*)

Writes the singed 8 bit integer value, c, to the stream and returns a reference to the stream.

.. _api_Log_4073c615:

 :ref:`Log<api_Log>` & **Log::operator<<** (:ref:`TString<api_TString>` & *string*)

Writes the text string, to the stream and returns a reference to the stream.

.. _api_Log_23a9815b:

 :ref:`Log<api_Log>` & **Log::operator<<** (char * *string*)

Writes the '\0'-terminated string, to the stream and returns a reference to the stream.

.. _api_Log_de7a4c13:

 :ref:`Log<api_Log>` & **Log::operator<<** (void * *value*)

Writes the pointer value, to the stream and returns a reference to the stream.

.. _api_Log_89275d6f:

 :ref:`Log<api_Log>` & **Log::operator<<** (double  *d*)

Writes the float value with double precision, d, to the stream and returns a reference to the stream.

.. _api_Log_6fe70835:

 :ref:`Log<api_Log>` & **Log::operator<<** (float  *f*)

Writes the float value, f, to the stream and returns a reference to the stream.

.. _api_Log_5c348ae7:

 :ref:`Log<api_Log>` & **Log::operator<<** (int  *i*)

Writes the singed 32 bit integer value, i, to the stream and returns a reference to the stream.

.. _api_Log_9d07f2ce:

 :ref:`Log<api_Log>` & **Log::operator<<** (long  *i*)

Writes the singed 64 bit integer value, i, to the stream and returns a reference to the stream.

.. _api_Log_de53760a:

 :ref:`Log<api_Log>` & **Log::operator<<** (short  *s*)

Writes the singed 16 bit integer value, s, to the stream and returns a reference to the stream.

.. _api_Log_a1df7ce6:

 :ref:`Log<api_Log>` & **Log::operator<<** (char  *c*)

Writes the unsinged 8 bit integer value, c, to the stream and returns a reference to the stream.

.. _api_Log_83791e64:

 :ref:`Log<api_Log>` & **Log::operator<<** (int  *i*)

Writes the unsinged 32 bit integer value, i, to the stream and returns a reference to the stream.

.. _api_Log_49635cfe:

 :ref:`Log<api_Log>` & **Log::operator<<** (long  *i*)

Writes the unsinged 64 bit integer value, i, to the stream and returns a reference to the stream.

.. _api_Log_625fbd4e:

 :ref:`Log<api_Log>` & **Log::operator<<** (short  *s*)

Writes the unsinged 16 bit integer value, s, to the stream and returns a reference to the stream.


