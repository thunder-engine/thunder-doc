.. _api_ThreadPool:
ThreadPool Class
================

Inherited: :ref:`Object<api_Object>`

.. _api_ThreadPool_description:
Description
-----------

The ThreadPool class manages a collection of threads.



.. _api_ThreadPool_public:
Public Methods
--------------

+-----------------------+------------------------------------------------------------------+
|                       | :ref:`ThreadPool<api_ThreadPool_ThreadPool>` ()                  |
+-----------------------+------------------------------------------------------------------+
|                       | :ref:`~ThreadPool<api_ThreadPool_~ThreadPool>` ()                |
+-----------------------+------------------------------------------------------------------+
|   :ref:`int<api_int>` | :ref:`maxThreads<api_ThreadPool_maxThreads>` () const            |
+-----------------------+------------------------------------------------------------------+
| :ref:`void<api_void>` | :ref:`setMaxThreads<api_ThreadPool_setMaxThreads>` (int  value)  |
+-----------------------+------------------------------------------------------------------+
| :ref:`void<api_void>` | :ref:`start<api_ThreadPool_start>` (Object & object)             |
+-----------------------+------------------------------------------------------------------+
| :ref:`bool<api_bool>` | :ref:`waitForDone<api_ThreadPool_waitForDone>` (int  msecs = -1) |
+-----------------------+------------------------------------------------------------------+

.. _api_ThreadPool_static:
Static Methods
--------------

+---------------------+-----------------------------------------------------------------+
| :ref:`int<api_int>` | :ref:`optimalThreadCount<api_ThreadPool_optimalThreadCount>` () |
+---------------------+-----------------------------------------------------------------+

.. _api_ThreadPool_methods:
Methods Description
-------------------

.. _api_ThreadPool_ThreadPool:

**ThreadPool::ThreadPool** ()

Default constructs an instance of ThreadPool.

----

.. _api_ThreadPool_~ThreadPool:

**ThreadPool::~ThreadPool** ()

Destroys the instance of ThreadPool. The destructor is virtual.

----

.. _api_ThreadPool_maxThreads:

:ref:`int<api_int>`  **ThreadPool::maxThreads** () const

**See also** setMaxThreads().

----

.. _api_ThreadPool_optimalThreadCount:

:ref:`int<api_int>`  **ThreadPool::optimalThreadCount** ()

----

.. _api_ThreadPool_setMaxThreads:

:ref:`void<api_void>`  **ThreadPool::setMaxThreads** (:ref:`int<api_int>`  *value*)

**See also** maxThreads().

----

.. _api_ThreadPool_start:

:ref:`void<api_void>`  **ThreadPool::start** (:ref:`Object<api_Object>` & *object*)

----

.. _api_ThreadPool_waitForDone:

:ref:`bool<api_bool>`  **ThreadPool::waitForDone** (:ref:`int<api_int>`  *msecs* = -1)

----


