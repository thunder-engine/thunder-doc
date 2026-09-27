.. _api_ThreadPool:

ThreadPool
==========

Inherited: :ref:`Object<api_Object>`

.. _api_ThreadPool_description:

Description
-----------



.. _api_ThreadPool_public:

Public Methods
--------------

+-----------+-------------------------------------------------------------------+
|  uint32_t | :ref:`maxThreads<api_ThreadPool_682ab79e>` () const               |
+-----------+-------------------------------------------------------------------+
|      void | :ref:`setMaxThreads<api_ThreadPool_0596e24c>` (uint32_t  number)  |
+-----------+-------------------------------------------------------------------+
|      void | :ref:`start<api_ThreadPool_ad63fc12>` (Runable * runnable)        |
+-----------+-------------------------------------------------------------------+
|      bool | :ref:`waitForDone<api_ThreadPool_5e91f0b7>` (int32_t  msecs = -1) |
+-----------+-------------------------------------------------------------------+



.. _api_ThreadPool_static:

Static Methods
--------------

+-----------+-------------------------------------------------------+
|  uint32_t | :ref:`optimalThreadCount<api_ThreadPool_7ebafc62>` () |
+-----------+-------------------------------------------------------+

.. _api_ThreadPool_methods:

Methods Description
-------------------

.. _api_ThreadPool_682ab79e:

 uint32_t **ThreadPool::maxThreads** () const

Returns the max number of threads allocated to work.

**See also** setMaxThreads().

----

.. _api_ThreadPool_7ebafc62:

 uint32_t **ThreadPool::optimalThreadCount** ()

Returns the optimal thread count for the current system. This value is based on the number of CPU cores.

----

.. _api_ThreadPool_0596e24c:

 void **ThreadPool::setMaxThreads** (uint32_t  *number*)

Sets the max *number* of threads allocated to work.

**See also** maxThreads().

----

.. _api_ThreadPool_ad63fc12:

 void **ThreadPool::start** (:ref:`Runable<api_Runable>` * *runnable*)

Adds a *runnable* to run queue. In case of any free worker available executes task immediately.

----

.. _api_ThreadPool_5e91f0b7:

 bool **ThreadPool::waitForDone** (int32_t  *msecs* = -1)

Waits up to *msecs* milliseconds for all threads to exit and removes all threads from the thread pool. Returns true if all threads were removed; otherwise it returns false. If *msecs* is -1 (the default), the timeout is ignored (waits for the last thread to exit).


