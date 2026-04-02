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
|                        | :ref:`Log<api_Log_5e6d0293>` (Log::LogTypes  type)           |
+------------------------+--------------------------------------------------------------+
|                        | :ref:`~Log<api_Log_6589f120>` ()                             |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_72da83b5>` (bool  b)                |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_9861eba4>` (char  c)                |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_395b68a4>` (const TString & string) |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_0e4c3fda>` (const char * string)    |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_fb9c08d2>` (const void * value)     |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_1ca9ef67>` (double  d)              |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_c83fa6e7>` (float  f)               |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_35c76ad2>` (int  i)                 |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_b23c1049>` (long long  i)           |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_e69ca180>` (short  s)               |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_cf9a187e>` (unsigned char  c)       |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_908bce17>` (unsigned int  i)        |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_4bd72806>` (unsigned long long  i)  |
+------------------------+--------------------------------------------------------------+
|  :ref:`Log<api_Log>` & | :ref:`operator<<<api_Log_1b2c4ea3>` (unsigned short  s)      |
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
|  void | :ref:`addHandler<api_Log_e6a175f0>` (LogHandler * handler)  |
+-------+-------------------------------------------------------------+
|  void | :ref:`setLogLevel<api_Log_3810a7e6>` (Log::LogTypes  level) |
+-------+-------------------------------------------------------------+

.. _api_Log_methods:

Methods Description
-------------------

.. _api_Log_5e6d0293:

**Log::Log** (:ref:`Log::LogTypes<api_Log::LogTypes>`  *type*)

Constructs a log stream that writes to the handler for the message *type*.

----

.. _api_Log_6589f120:

**Log::~Log** ()

Flushes any pending data to be written and destroys the log stream.

----

.. _api_Log_e6a175f0:

 void **Log::addHandler** (:ref:`LogHandler<api_LogHandler>` * *handler*)

Adds a new Log *handler*. This method can be used in case if a developer would need to move logging stream to someplace. For example to the console.

----

.. _api_Log_3810a7e6:

 void **Log::setLogLevel** (:ref:`Log::LogTypes<api_Log::LogTypes>`  *level*)

Set current log *level* output. Messages wich are below this *level* will be descarded.

----

.. _api_Log_72da83b5:

 :ref:`Log<api_Log>` & **Log::operator<<** (bool  *b*)

Writes the *b*oolean value, *b*, to the stream and returns a reference to the stream.

.. _api_Log_9861eba4:

 :ref:`Log<api_Log>` & **Log::operator<<** (char  *c*)

Writes the singed 8 bit integer value, *c*, to the stream and returns a reference to the stream.

.. _api_Log_395b68a4:

 :ref:`Log<api_Log>` & **Log::operator<<** (:ref:`TString<api_TString>` & *string*)

Writes the text *string*, to the stream and returns a reference to the stream.

.. _api_Log_0e4c3fda:

 :ref:`Log<api_Log>` & **Log::operator<<** (char * *string*)

Writes the '\0'-terminated *string*, to the stream and returns a reference to the stream.

.. _api_Log_fb9c08d2:

 :ref:`Log<api_Log>` & **Log::operator<<** (void * *value*)

Writes the pointer *value*, to the stream and returns a reference to the stream.

.. _api_Log_1ca9ef67:

 :ref:`Log<api_Log>` & **Log::operator<<** (:ref:`double<api_double>`  *d*)

Writes the float value with *d*ouble precision, *d*, to the stream and returns a reference to the stream.

.. _api_Log_c83fa6e7:

 :ref:`Log<api_Log>` & **Log::operator<<** (float  *f*)

Writes the *f*loat value, *f*, to the stream and returns a reference to the stream.

.. _api_Log_35c76ad2:

 :ref:`Log<api_Log>` & **Log::operator<<** (int  *i*)

Writes the singed 32 bit *i*nteger value, *i*, to the stream and returns a reference to the stream.

.. _api_Log_b23c1049:

 :ref:`Log<api_Log>` & **Log::operator<<** (:ref:`long<api_long>`  *i*)

Writes the singed 64 bit *i*nteger value, *i*, to the stream and returns a reference to the stream.

.. _api_Log_e69ca180:

 :ref:`Log<api_Log>` & **Log::operator<<** (:ref:`short<api_short>`  *s*)

Writes the *s*inged 16 bit integer value, *s*, to the *s*tream and returns a reference to the *s*tream.

.. _api_Log_cf9a187e:

 :ref:`Log<api_Log>` & **Log::operator<<** (char  *c*)

Writes the unsinged 8 bit integer value, *c*, to the stream and returns a reference to the stream.

.. _api_Log_908bce17:

 :ref:`Log<api_Log>` & **Log::operator<<** (int  *i*)

Writes the unsinged 32 bit *i*nteger value, *i*, to the stream and returns a reference to the stream.

.. _api_Log_4bd72806:

 :ref:`Log<api_Log>` & **Log::operator<<** (:ref:`long<api_long>`  *i*)

Writes the unsinged 64 bit *i*nteger value, *i*, to the stream and returns a reference to the stream.

.. _api_Log_1b2c4ea3:

 :ref:`Log<api_Log>` & **Log::operator<<** (:ref:`short<api_short>`  *s*)

Writes the unsinged 16 bit integer value, *s*, to the *s*tream and returns a reference to the *s*tream.


